-- Guided classroom quiz. Apply after 20261022_classroom_learners.sql.
-- Rerunnable: existing exams, packets, answers and account links are preserved.
begin;
alter table public.classroom_rooms add column if not exists session_mode text not null default 'exam' check (session_mode in ('exam','quiz'));
alter table public.classroom_rooms add column if not exists quiz_phase text not null default 'lobby' check (quiz_phase in ('lobby','answering','locked','review','finished'));
alter table public.classroom_rooms add column if not exists quiz_index integer not null default 0;
alter table public.classroom_rooms add column if not exists quiz_seconds integer not null default 0 check (quiz_seconds between 0 and 600);
alter table public.classroom_rooms add column if not exists quiz_deadline timestamptz;

-- Keep the v3 exam implementation private. Only the new dispatcher is callable
-- by clients, so quiz participants cannot bypass round boundaries using save.
do $$ begin
  if to_regprocedure('public.classroom_exam_rpc_v3(text,jsonb)') is null then
    alter function public.classroom_rpc(text,jsonb) rename to classroom_exam_rpc_v3;
  end if;
end $$;
revoke all on function public.classroom_exam_rpc_v3(text,jsonb) from public,anon,authenticated;

create or replace function public.classroom_rpc(action text,payload jsonb default '{}') returns jsonb
language plpgsql security definer set search_path='' as $$
declare
  r public.classroom_rooms%rowtype; m public.classroom_members%rowtype;
  base jsonb; q jsonb; safe_q jsonb; picks jsonb; opt jsonb; qs jsonb; history_qs jsonb;
  people jsonb; distribution jsonb; secret text; is_host boolean; current_id text;
  moment timestamptz; answered integer; total integer; visible_count integer; seconds integer;
begin
  if action is null or jsonb_typeof(payload) is distinct from 'object' or octet_length(payload::text)>1500000 then
    raise exception 'Data kelas tidak valid.';
  end if;
  if action='health' then return jsonb_build_object('ready',true,'version',4,'guidedQuiz',true); end if;
  if action='account_history' then return public.classroom_exam_rpc_v3(action,payload); end if;
  secret:=payload->>'token';
  if secret is null or secret !~ '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$' then
    raise exception 'Kunci sesi tidak valid.';
  end if;
  if action='create' then
    if coalesce(payload->>'mode','exam') not in ('quiz','exam') then raise exception 'Mode sesi tidak valid.'; end if;
    seconds:=coalesce((payload->>'seconds')::integer,0);
    if seconds not between 0 and 600 then raise exception 'Waktu per soal harus 0 sampai 600 detik.'; end if;
    select * into r from public.classroom_rooms where host_hash=md5(secret) for update;
    if found then
      if r.session_mode is distinct from coalesce(payload->>'mode','exam') then raise exception 'Kunci sesi sudah dipakai pada mode lain.'; end if;
    else
      base:=public.classroom_exam_rpc_v3(action,payload);
      select * into r from public.classroom_rooms where code=base->>'code' for update;
      if payload->>'mode'='quiz' then
        update public.classroom_rooms set session_mode='quiz',quiz_seconds=seconds where id=r.id returning * into r;
      end if;
    end if;
  else
    select * into r from public.classroom_rooms where code=upper(btrim(payload->>'code')) for update;
    if not found then raise exception 'Kode sesi tidak ditemukan.'; end if;
  end if;
  if r.session_mode='exam' then
    return public.classroom_exam_rpc_v3(action,payload)||jsonb_build_object('version',4,'mode','exam');
  end if;

  -- Reuse validated enrollment, account linking and recovery. Their projections
  -- are discarded: only the round-specific projection below leaves this wrapper.
  if action in ('join','ready','remove','settings','recover','reset_member','transfer','claim_host','account_resume','link_account') then
    base:=public.classroom_exam_rpc_v3(action,payload);
    select * into r from public.classroom_rooms where id=r.id for update;
  elsif action not in ('create','state','quiz_start','quiz_answer','quiz_close','quiz_reveal','quiz_next','quiz_finish') then
    raise exception 'Gunakan kontrol kuis terpandu untuk sesi ini.';
  end if;
  is_host:=r.host_hash=md5(secret);
  if not is_host then
    select * into m from public.classroom_members where room_id=r.id and token_hash=md5(secret);
    if not found then raise exception 'Akses sesi ditolak.'; end if;
  end if;
  if action in ('quiz_start','quiz_close','quiz_reveal','quiz_next','quiz_finish') and not is_host then
    raise exception 'Hanya host yang dapat mengendalikan kuis.';
  end if;
  moment:=clock_timestamp();
  if moment>=r.expires_at and not (r.status='closed' and action in ('state','account_resume') and exists(
    select 1 from public.classroom_account_links where member_id=m.id and user_id=auth.uid())) then
    raise exception 'Sesi sudah kedaluwarsa.';
  end if;
  total:=jsonb_array_length(r.questions);
  q:=r.questions->r.quiz_index;
  current_id:=q->>'id';
  -- Time is checked after acquiring the room lock; client clocks cannot extend it.
  if r.quiz_phase='answering' and r.quiz_deadline is not null and moment>=r.quiz_deadline then
    update public.classroom_rooms set quiz_phase='locked' where id=r.id returning * into r;
  end if;
  if action='quiz_start' and r.quiz_phase='lobby' then
    if not exists(select 1 from public.classroom_members where room_id=r.id) then raise exception 'Tunggu minimal satu peserta bergabung.'; end if;
    update public.classroom_rooms set status='running',starts_at=moment,ends_at=expires_at,
      quiz_phase='answering',quiz_deadline=case when quiz_seconds>0 then moment+make_interval(secs=>quiz_seconds) else null end
      where id=r.id returning * into r;
  elsif action='quiz_answer' then
    if is_host then raise exception 'Host tidak mengisi jawaban peserta.'; end if;
    if (payload->>'questionIndex')::integer is distinct from r.quiz_index then raise exception 'Soal sudah berganti. Sinkronkan sesi.'; end if;
    picks:=payload->'selected';
    if jsonb_typeof(picks) is distinct from 'array' then raise exception 'Pilihan jawaban tidak valid.'; end if;
    if jsonb_array_length(picks)<>jsonb_array_length(q->'correctAnswers')
      or (select count(distinct value) from jsonb_array_elements(picks))<>jsonb_array_length(picks)
      or exists(select 1 from jsonb_array_elements(picks) x where jsonb_typeof(x) is distinct from 'string'
        or not exists(select 1 from jsonb_array_elements(q->'options') o where o->'id'=x)) then
      raise exception 'Lengkapi pilihan jawaban sesuai jumlah yang diminta.';
    end if;
    if not (m.answers ? current_id) then
      if r.quiz_phase<>'answering' then raise exception 'Waktu menjawab sudah ditutup.'; end if;
      update public.classroom_members set answers=jsonb_set(answers,array[current_id],picks),revision=revision+1,seen_at=moment
        where id=m.id returning * into m;
    end if;
  elsif action in ('quiz_close','quiz_reveal','quiz_next') then
    -- A retry for a previous round cannot close or advance the following round.
    if (payload->>'questionIndex')::integer is distinct from r.quiz_index then raise exception 'Soal sudah berganti. Sinkronkan sesi.'; end if;
    if action='quiz_close' then
      if r.quiz_phase not in ('answering','locked') then raise exception 'Jawaban belum dapat ditutup.'; end if;
      update public.classroom_rooms set quiz_phase='locked' where id=r.id returning * into r;
    elsif action='quiz_reveal' then
      if r.quiz_phase not in ('locked','review') then raise exception 'Tutup jawaban sebelum membuka pembahasan.'; end if;
      update public.classroom_rooms set quiz_phase='review' where id=r.id returning * into r;
    else
      if r.quiz_phase<>'review' or r.quiz_index>=total-1 then raise exception 'Buka pembahasan sebelum melanjutkan soal.'; end if;
      update public.classroom_rooms set quiz_index=quiz_index+1,quiz_phase='answering',
        quiz_deadline=case when quiz_seconds>0 then moment+make_interval(secs=>quiz_seconds) else null end
        where id=r.id returning * into r;
    end if;
  elsif action='quiz_finish' then
    if r.quiz_phase not in ('review','finished') then raise exception 'Buka pembahasan sebelum menyelesaikan kuis.'; end if;
    update public.classroom_rooms set quiz_phase='finished',status='closed',revealed=true,ends_at=case when quiz_phase='finished' then ends_at else moment end where id=r.id returning * into r;
    update public.classroom_members set submitted_at=coalesce(submitted_at,moment) where room_id=r.id;
  end if;
  q:=r.questions->r.quiz_index;
  current_id:=q->>'id';
  visible_count:=r.quiz_index+case when r.quiz_phase in ('review','finished') then 1 else 0 end;
  select coalesce(jsonb_agg(value order by n),'[]'::jsonb) into history_qs
    from jsonb_array_elements(r.questions) with ordinality x(value,n) where n<=visible_count;
  if r.quiz_phase='finished' then
    -- Early finish never reveals future questions or awards their answers.
    select coalesce(jsonb_agg(value||jsonb_build_object('required',jsonb_array_length(value->'correctAnswers')) order by n),'[]'::jsonb)
      into qs from jsonb_array_elements(history_qs) with ordinality x(value,n);
  elsif r.quiz_phase='lobby' then qs:='[]'::jsonb;
  else
    safe_q:=jsonb_build_object('id',q->>'id','prompt',q->>'prompt','domain',q->>'domain','lang',q->>'lang',
      'type',q->>'type','examType',q->>'examType','options',q->'options','required',jsonb_array_length(q->'correctAnswers'));
    if r.quiz_phase='review' then
      safe_q:=safe_q||jsonb_build_object('correctAnswers',q->'correctAnswers','explanation',q->>'explanation');
    end if;
    qs:=jsonb_build_array(safe_q);
  end if;
  select count(*) into answered from public.classroom_members where room_id=r.id and answers ? current_id;
  select coalesce(jsonb_agg(jsonb_build_object('id',p.id,'name',p.name,'ready',p.ready,
    'answered',case when p.answers ? current_id then 1 else 0 end,'submitted',p.submitted_at is not null,
    'lastSeen',extract(epoch from p.seen_at)*1000,'score',public.classroom_score(history_qs,p.answers))
    order by public.classroom_score(history_qs,p.answers) desc,lower(p.name),p.id),'[]'::jsonb)
    into people from public.classroom_members p where p.room_id=r.id;
  distribution:=null;
  if r.quiz_phase in ('review','finished') then
    select jsonb_object_agg(o->>'id',(select count(*) from public.classroom_members p where p.room_id=r.id and p.answers->current_id @> jsonb_build_array(o->>'id')))
      into distribution from jsonb_array_elements(q->'options') o;
  end if;
  if not is_host then update public.classroom_members set seen_at=moment where id=m.id; end if;
  base:=jsonb_build_object('code',r.code,'title',r.title,'status',r.status,'minutes',r.minutes,'mode','quiz','version',4,
    'startsAt',extract(epoch from r.starts_at)*1000,'endsAt',extract(epoch from r.ends_at)*1000,
    'serverNow',extract(epoch from clock_timestamp())*1000,'revealed',r.revealed,'total',total,
    'participantCount',jsonb_array_length(people),'host',is_host,'allowLate',r.allow_late,
    'createdAt',extract(epoch from r.created_at)*1000,'expiresAt',extract(epoch from r.expires_at)*1000,
    'questions',qs,'quizPhase',r.quiz_phase,'quizIndex',r.quiz_index,'quizSeconds',r.quiz_seconds,
    'quizDeadline',extract(epoch from r.quiz_deadline)*1000,'quizAnswered',answered,'quizDistribution',distribution,
    'quizLeaderboard',people,'quizReviewed',visible_count);
  if is_host then return base||jsonb_build_object('participants',people); end if;
  return base||jsonb_build_object('member',jsonb_build_object('id',m.id,'name',m.name,'ready',m.ready,
    'answers',m.answers,'flags',m.flags,'revision',m.revision,'submitted',r.status='closed',
    'accountLinked',exists(select 1 from public.classroom_account_links where member_id=m.id and user_id=auth.uid()),
    'score',public.classroom_score(history_qs,m.answers)));
end $$;
revoke all on function public.classroom_rpc(text,jsonb) from public;
grant execute on function public.classroom_rpc(text,jsonb) to anon,authenticated;
notify pgrst,'reload schema';
commit;
