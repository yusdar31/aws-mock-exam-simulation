-- Classroom v2 and persistent reports. Safe to rerun; preserves existing rooms and answers.
-- Separate from existing account/batch tables; names + room codes do not create accounts.
begin;
create table if not exists public.classroom_rooms (
  id uuid primary key default gen_random_uuid(), code text unique not null,
  host_hash text unique not null, title text not null, questions jsonb not null,
  minutes integer not null, status text not null default 'waiting' check(status in ('waiting','running','closed')),
  starts_at timestamptz, ends_at timestamptz, revealed boolean not null default false,
  created_at timestamptz not null default clock_timestamp(),
  expires_at timestamptz not null default (clock_timestamp()+interval '7 days')
);
create table if not exists public.classroom_members (
  id uuid primary key default gen_random_uuid(), room_id uuid not null references public.classroom_rooms(id) on delete cascade,
  token_hash text not null, name text not null, answers jsonb not null default '{}',
  revision integer not null default 0, submitted_at timestamptz,
  seen_at timestamptz not null default clock_timestamp(),
  unique(room_id,token_hash)
);
create unique index if not exists classroom_unique_name on public.classroom_members(room_id,lower(name));
alter table public.classroom_rooms add column if not exists allow_late boolean not null default false;
alter table public.classroom_rooms add column if not exists review_sync boolean not null default false;
alter table public.classroom_rooms add column if not exists review_index integer not null default 0;
alter table public.classroom_rooms add column if not exists transfer_hash text;
alter table public.classroom_rooms add column if not exists transfer_expires timestamptz;
alter table public.classroom_members add column if not exists ready boolean not null default false;
alter table public.classroom_members add column if not exists recovery_hash text;
alter table public.classroom_members add column if not exists recovery_expires timestamptz;
alter table public.classroom_rooms enable row level security;
alter table public.classroom_members enable row level security;
revoke all on public.classroom_rooms,public.classroom_members from public,anon,authenticated;

create or replace function public.classroom_score(qs jsonb, ans jsonb) returns integer
language sql immutable set search_path='' as $$
  select count(*)::integer from jsonb_array_elements(qs) q
  where jsonb_typeof(ans->(q->>'id'))='array'
    and (select jsonb_agg(v order by v) from jsonb_array_elements(q->'correctAnswers') v)
      = (select jsonb_agg(v order by v) from jsonb_array_elements(ans->(q->>'id')) v);
$$;
revoke all on function public.classroom_score(jsonb,jsonb) from public,anon,authenticated;

create or replace function public.classroom_rpc(action text, payload jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare
  r public.classroom_rooms%rowtype;
  m public.classroom_members%rowtype;
  q jsonb; opt jsonb; a jsonb; pair record; qs jsonb; safe_qs jsonb;
  room_code text; secret text; display_name text; is_host boolean:=false;
  moment timestamptz:=clock_timestamp(); begun boolean; finished boolean; total integer;
  participant_count integer; duration integer; title_value text; base jsonb; members jsonb;
begin
  if action is null or action not in ('health','create','join','state','start','save','submit','finish','reveal','ready','remove','reset_member','recover','transfer','claim_host','settings','review')
    then raise exception 'Tindakan kelas tidak valid.'; end if;
  if jsonb_typeof(payload) is distinct from 'object' or octet_length(payload::text)>1500000
    then raise exception 'Data kelas tidak valid.'; end if;
  if action='health' then return jsonb_build_object('ready',true,'version',2); end if;
  secret:=payload->>'token';
  if secret is null or secret !~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$' then raise exception 'Kunci sesi tidak valid.'; end if;
  if action='create' then
    -- A client-generated random host key makes retries idempotent after connection loss.
    select * into r from public.classroom_rooms where host_hash=md5(secret) for update;
    if not found then
      title_value:=btrim(payload->>'title'); qs:=payload->'questions';
      duration:=(payload->>'minutes')::integer;
      if title_value is null or length(title_value) not between 1 and 120
        or duration is null or duration not between 1 and 180
        or jsonb_typeof(qs) is distinct from 'array'
        then raise exception 'Judul, durasi, atau paket soal tidak valid.'; end if;
      total:=jsonb_array_length(qs);
      if total not between 1 and 100 or (select count(distinct value->>'id') from jsonb_array_elements(qs))<>total
        then raise exception 'Paket harus berisi 1 sampai 100 soal unik.'; end if;
      for q in select value from jsonb_array_elements(qs) loop
        if q->>'id' is null or length(q->>'id') not between 1 and 200
          or q->>'prompt' is null or length(q->>'prompt') not between 1 and 6000
          or q->>'type' is null or q->>'type' not in ('single','multiple')
          or q->>'lang' is null or q->>'lang' not in ('id','en')
          or jsonb_typeof(q->'options') is distinct from 'array'
          or jsonb_typeof(q->'correctAnswers') is distinct from 'array'
          then raise exception 'Struktur soal tidak valid.'; end if;
        if jsonb_array_length(q->'options') not between 2 and 6
          or jsonb_array_length(q->'correctAnswers') not between 1 and 6
          or (q->>'type'='single' and jsonb_array_length(q->'correctAnswers')<>1)
          or (select count(distinct value->>'id') from jsonb_array_elements(q->'options'))<>jsonb_array_length(q->'options')
          or (select count(distinct value) from jsonb_array_elements(q->'correctAnswers'))<>jsonb_array_length(q->'correctAnswers')
          then raise exception 'Opsi atau kunci soal tidak valid.'; end if;
        for opt in select value from jsonb_array_elements(q->'options') loop
          if jsonb_typeof(opt->'id') is distinct from 'string' or length(opt->>'id') not between 1 and 20
            or jsonb_typeof(opt->'text') is distinct from 'string' or length(opt->>'text') not between 1 and 3000
            then raise exception 'Teks opsi tidak valid.'; end if;
        end loop;
        if exists(select 1 from jsonb_array_elements(q->'correctAnswers') v
          where jsonb_typeof(v) is distinct from 'string'
          or not exists(select 1 from jsonb_array_elements(q->'options') o where o->'id'=v))
          then raise exception 'Kunci harus merujuk opsi yang tersedia.'; end if;
      end loop;
      -- Collision retry never replaces another room or reveals its host key.
      loop
        room_code:=upper(substr(replace(gen_random_uuid()::text,'-',''),1,8));
        begin
          insert into public.classroom_rooms(code,host_hash,title,questions,minutes)
            values(room_code,md5(secret),title_value,qs,duration) returning * into r;
          exit;
        exception when unique_violation then
          select * into r from public.classroom_rooms where host_hash=md5(secret);
          if found then exit; end if;
        end;
      end loop;
    end if;
    is_host:=true;
  else
    select * into r from public.classroom_rooms where code=upper(btrim(payload->>'code')) for update;
    if not found then raise exception 'Kode sesi tidak ditemukan.'; end if;
    is_host:=r.host_hash=md5(secret);
  end if;
  moment:=clock_timestamp();
  if action='claim_host' then
    if payload->>'transferToken' is null or r.transfer_hash is distinct from md5(payload->>'transferToken')
      or r.transfer_expires is null or moment>=r.transfer_expires then raise exception 'Kode pemindahan tidak valid atau sudah kedaluwarsa.'; end if;
    update public.classroom_rooms set host_hash=md5(secret),transfer_hash=null,transfer_expires=null where id=r.id returning * into r;
    is_host:=true;
  end if;
  if action='recover' then
    select * into m from public.classroom_members where room_id=r.id and recovery_hash=md5(payload->>'recoveryToken') and recovery_expires>moment;
    if not found then raise exception 'Kode pemulihan tidak valid atau sudah kedaluwarsa.'; end if;
    update public.classroom_members set token_hash=md5(secret),recovery_hash=null,recovery_expires=null,revision=revision+1,seen_at=moment where id=m.id returning * into m;
  end if;
  if moment>=r.expires_at then raise exception 'Sesi sudah kedaluwarsa.'; end if;
  if r.status='running' and moment>=r.ends_at then
    update public.classroom_rooms set status='closed' where id=r.id returning * into r;
  end if;
  if action='join' then
    if is_host then raise exception 'Gunakan perangkat peserta untuk bergabung.'; end if;
    select * into m from public.classroom_members where room_id=r.id and token_hash=md5(secret);
    if not found then
      if r.status<>'waiting' and not (r.status='running' and r.allow_late) then raise exception 'Sesi sudah dimulai. Peserta baru tidak dapat bergabung.'; end if;
      display_name:=btrim(payload->>'name');
      if display_name is null or length(display_name) not between 1 and 80 then raise exception 'Isi nama peserta, maksimal 80 karakter.'; end if;
      if (select count(*) from public.classroom_members where room_id=r.id)>=200 then raise exception 'Sesi sudah mencapai 200 peserta.'; end if;
      begin
        insert into public.classroom_members(room_id,token_hash,name) values(r.id,md5(secret),display_name) returning * into m;
      exception when unique_violation then raise exception 'Nama sudah digunakan. Tambahkan nama belakang atau nomor peserta.';
      end;
    end if;
  elsif not is_host then
    select * into m from public.classroom_members where room_id=r.id and token_hash=md5(secret);
    if not found then raise exception 'Akses sesi ditolak.'; end if;
  end if;
  if action in ('start','finish','reveal','remove','reset_member','transfer','settings','review') and not is_host then raise exception 'Hanya instruktur yang dapat mengendalikan sesi.'; end if;
  if action='ready' then
    if is_host or r.status<>'waiting' or jsonb_typeof(payload->'ready') is distinct from 'boolean' then raise exception 'Kesiapan hanya diubah peserta di ruang tunggu.'; end if;
    update public.classroom_members set ready=(payload->>'ready')::boolean where id=m.id returning * into m;
  elsif action='remove' then
    if r.status<>'waiting' then raise exception 'Peserta hanya dapat dikeluarkan sebelum ujian dimulai.'; end if;
    delete from public.classroom_members where room_id=r.id and id=(payload->>'memberId')::uuid;
  elsif action='reset_member' then
    if payload->>'recoveryToken' is null or payload->>'recoveryToken' !~ '^[0-9a-fA-F-]{36}$' then raise exception 'Kunci pemulihan tidak valid.'; end if;
    update public.classroom_members set recovery_hash=md5(payload->>'recoveryToken'),recovery_expires=moment+interval '5 minutes'
      where room_id=r.id and id=(payload->>'memberId')::uuid;
    if not found then raise exception 'Peserta tidak ditemukan.'; end if;
  elsif action='transfer' then
    if payload->>'transferToken' is null or payload->>'transferToken' !~ '^[0-9a-fA-F-]{36}$' then raise exception 'Kunci pemindahan tidak valid.'; end if;
    update public.classroom_rooms set transfer_hash=md5(payload->>'transferToken'),transfer_expires=moment+interval '5 minutes' where id=r.id returning * into r;
  elsif action='settings' then
    if r.status<>'waiting' or jsonb_typeof(payload->'allowLate') is distinct from 'boolean' then raise exception 'Aturan masuk diubah sebelum ujian dimulai.'; end if;
    update public.classroom_rooms set allow_late=(payload->>'allowLate')::boolean where id=r.id returning * into r;
  elsif action='review' then
    if r.status<>'closed' or jsonb_typeof(payload->'reviewSync') is distinct from 'boolean'
      or (payload->>'reviewIndex')::integer is null or (payload->>'reviewIndex')::integer not between 0 and jsonb_array_length(r.questions)-1
      then raise exception 'Pilihan pembahasan tidak valid.'; end if;
    update public.classroom_rooms set review_sync=(payload->>'reviewSync')::boolean,review_index=(payload->>'reviewIndex')::integer where id=r.id returning * into r;
  end if;
  if action='create' and payload ? 'allowLate' then
    update public.classroom_rooms set allow_late=coalesce((payload->>'allowLate')::boolean,false) where id=r.id returning * into r;
  end if;
  if action='start' and r.status='waiting' then
    if not exists(select 1 from public.classroom_members where room_id=r.id) then raise exception 'Tunggu minimal satu peserta bergabung.'; end if;
    update public.classroom_rooms set status='running', starts_at=moment+interval '5 seconds',
      ends_at=moment+interval '5 seconds'+make_interval(mins=>r.minutes) where id=r.id returning * into r;
  elsif action='finish' and r.status<>'closed' then
    update public.classroom_rooms set status='closed',ends_at=moment where id=r.id returning * into r;
  elsif action='reveal' then
    if r.status<>'closed' then raise exception 'Akhiri sesi sebelum membuka pembahasan.'; end if;
    update public.classroom_rooms set revealed=true where id=r.id returning * into r;
  end if;
  begun:=r.starts_at is not null and moment>=r.starts_at;
  finished:=r.status='closed';
  if action in ('save','submit') then
    if is_host then raise exception 'Instruktur tidak mengisi jawaban peserta.'; end if;
    -- Already submitted: idempotent submit, no later answer changes.
    if m.submitted_at is null then
      if r.status<>'running' or not begun or moment>=r.ends_at then raise exception 'Waktu pengerjaan belum dimulai atau sudah berakhir.'; end if;
      if (payload->>'revision')::integer is distinct from m.revision then raise exception 'Jawaban berubah di tab lain. Muat ulang sesi sebelum melanjutkan.'; end if;
      a:=payload->'answers';
      if jsonb_typeof(a) is distinct from 'object' then raise exception 'Jawaban tidak valid.'; end if;
      for pair in select * from jsonb_each(a) loop
        select value into q from jsonb_array_elements(r.questions) where value->>'id'=pair.key;
        if not found or jsonb_typeof(pair.value) is distinct from 'array' then raise exception 'Soal jawaban tidak valid.'; end if;
        if jsonb_array_length(pair.value)>jsonb_array_length(q->'correctAnswers')
          or (select count(distinct value) from jsonb_array_elements(pair.value))<>jsonb_array_length(pair.value)
          or exists(select 1 from jsonb_array_elements(pair.value) v where jsonb_typeof(v) is distinct from 'string'
            or not exists(select 1 from jsonb_array_elements(q->'options') o where o->'id'=v))
          then raise exception 'Pilihan jawaban tidak valid.'; end if;
      end loop;
      update public.classroom_members set answers=a,revision=revision+1,
        submitted_at=case when action='submit' then moment else null end,seen_at=moment where id=m.id returning * into m;
    elsif action='save' then raise exception 'Jawaban sudah dikumpulkan.';
    end if;
  end if;
  -- Finalize at the server when every participant submits, even while the host is disconnected.
  if r.status='running' and exists(select 1 from public.classroom_members where room_id=r.id)
    and not exists(select 1 from public.classroom_members where room_id=r.id and submitted_at is null) then
    update public.classroom_rooms set status='closed',ends_at=moment where id=r.id returning * into r;
    finished:=true;
  end if;
  if not is_host and r.status<>'closed' then update public.classroom_members set seen_at=moment where id=m.id; end if;
  total:=jsonb_array_length(r.questions);
  select count(*) into participant_count from public.classroom_members where room_id=r.id;
  base:=jsonb_build_object('code',r.code,'title',r.title,'status',r.status,'minutes',r.minutes,
    'startsAt',extract(epoch from r.starts_at)*1000,'endsAt',extract(epoch from r.ends_at)*1000,
    'serverNow',extract(epoch from clock_timestamp())*1000,'revealed',r.revealed,'total',total,
    'participantCount',participant_count,'host',is_host,'version',2,'allowLate',r.allow_late,
    'createdAt',extract(epoch from r.created_at)*1000,'expiresAt',extract(epoch from r.expires_at)*1000,
    'reviewSync',r.review_sync and r.revealed,'reviewIndex',r.review_index);
  -- Whitelist public fields. No key, rationale or question snapshot before the start.
  if is_host or begun or finished then
    select jsonb_agg(jsonb_build_object('id',v->>'id','prompt',v->>'prompt','domain',v->>'domain','lang',v->>'lang',
      'type',v->>'type','examType',v->>'examType','options',v->'options','required',jsonb_array_length(v->'correctAnswers')) order by n)
      into safe_qs from jsonb_array_elements(r.questions) with ordinality x(v,n);
    select jsonb_agg(v||jsonb_build_object('required',jsonb_array_length(v->'correctAnswers')) order by n)
      into qs from jsonb_array_elements(r.questions) with ordinality x(v,n);
    base:=base||jsonb_build_object('questions',case when finished and (is_host or r.revealed) then qs else safe_qs end);
  else base:=base||jsonb_build_object('questions','[]'::jsonb); end if;
  if is_host then
    select coalesce(jsonb_agg(jsonb_build_object('id',p.id,'name',p.name,'ready',p.ready,'submitted',p.submitted_at is not null,
      'answered',(select count(*) from jsonb_each(p.answers) x where jsonb_array_length(x.value)>0),
      'lastSeen',extract(epoch from p.seen_at)*1000,'score',case when finished then public.classroom_score(r.questions,p.answers) else null end,
      'answers',case when finished then p.answers else null end) order by lower(p.name),p.id),'[]'::jsonb)
      into members from public.classroom_members p where p.room_id=r.id;
    return base||jsonb_build_object('participants',members);
  end if;
  return base||jsonb_build_object('member',jsonb_build_object('id',m.id,'name',m.name,'ready',m.ready,'answers',m.answers,
    'revision',m.revision,'submitted',m.submitted_at is not null,
    'score',case when finished and r.revealed then public.classroom_score(r.questions,m.answers) else null end));
end $$;
revoke all on function public.classroom_rpc(text,jsonb) from public;
grant execute on function public.classroom_rpc(text,jsonb) to anon,authenticated;
-- Admin authorization comes from trusted auth claims or the protected role table.
create table if not exists public.app_roles (user_id uuid primary key references auth.users(id) on delete cascade, role text not null check(role in ('coach','admin')));
alter table public.app_roles enable row level security;
revoke all on public.app_roles from public,anon;
create table if not exists public.question_reports (
  id uuid primary key, token_hash text not null, question_id text not null, version integer not null,
  reason text not null, detail text not null, status text not null default 'pending' check(status in ('pending','in_review','resolved')),
  resolution text not null default '',created_at timestamptz not null default clock_timestamp(),updated_at timestamptz not null default clock_timestamp()
);
alter table public.question_reports enable row level security;
revoke all on public.question_reports from public,anon,authenticated;
create or replace function public.report_rpc(action text,payload jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare row_value public.question_reports%rowtype; secret text; admin_actor boolean; entries jsonb;
begin
  if jsonb_typeof(payload) is distinct from 'object' or octet_length(payload::text)>100000 then raise exception 'Data laporan tidak valid.'; end if;
  if action='health' then return jsonb_build_object('ready',true); end if;
  admin_actor:=auth.uid() is not null and (coalesce(auth.jwt()->'app_metadata'->>'role','')='admin'
    or exists(select 1 from public.app_roles where user_id=auth.uid() and role='admin'));
  if action='submit' then
    secret:=coalesce(payload->>'token',payload->>'id');
    if secret is null or secret !~ '^[0-9a-fA-F-]{36}$' or payload->>'id' is null
      or payload->>'questionId' is null or length(payload->>'questionId') not between 1 and 200
      or payload->>'reason' is null or payload->>'reason' not in ('answer','language','explanation','outdated')
      or payload->>'detail' is null or length(btrim(payload->>'detail')) not between 10 and 2000
      or coalesce((payload->>'version')::integer,0)<1 then raise exception 'Data laporan tidak valid.'; end if;
    insert into public.question_reports(id,token_hash,question_id,version,reason,detail)
      values((payload->>'id')::uuid,md5(secret),payload->>'questionId',(payload->>'version')::integer,payload->>'reason',btrim(payload->>'detail'))
      on conflict(id) do nothing;
    select * into row_value from public.question_reports where id=(payload->>'id')::uuid and token_hash=md5(secret);
    if not found then raise exception 'Akses laporan ditolak.'; end if;
    return jsonb_build_object('received',true,'id',row_value.id,'status',row_value.status);
  elsif action='status' then
    if jsonb_typeof(payload->'items') is distinct from 'array' or jsonb_array_length(payload->'items')>100 then raise exception 'Data laporan tidak valid.'; end if;
    select coalesce(jsonb_agg(jsonb_build_object('id',r.id,'status',r.status,'resolution',r.resolution)),'[]') into entries
      from public.question_reports r where exists(select 1 from jsonb_array_elements(payload->'items') i where i->>'id'=r.id::text and md5(coalesce(i->>'token',i->>'id'))=r.token_hash);
    return jsonb_build_object('items',entries);
  elsif action in ('list','resolve') then
    if not admin_actor then raise exception 'Hanya admin yang dapat meninjau laporan.'; end if;
    if action='resolve' then
      if payload->>'status' is null or payload->>'status' not in ('pending','in_review','resolved') or length(coalesce(payload->>'resolution',''))>2000 then raise exception 'Status laporan tidak valid.'; end if;
      update public.question_reports set status=payload->>'status',resolution=coalesce(payload->>'resolution',''),updated_at=clock_timestamp() where id=(payload->>'id')::uuid returning * into row_value;
      if not found then raise exception 'Laporan tidak ditemukan.'; end if;
      return jsonb_build_object('id',row_value.id,'status',row_value.status);
    end if;
    select coalesce(jsonb_agg(to_jsonb(x)),'[]') into entries from (select id,question_id,version,reason,detail,status,resolution,created_at from public.question_reports order by created_at desc limit 200) x;
    return jsonb_build_object('items',entries);
  end if;
  raise exception 'Tindakan laporan tidak valid.';
end $$;
revoke all on function public.report_rpc(text,jsonb) from public;
grant execute on function public.report_rpc(text,jsonb) to anon,authenticated;

notify pgrst, 'reload schema';
commit;

