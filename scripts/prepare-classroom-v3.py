from pathlib import Path

source = Path('supabase/migrations/20261019_classroom_upgrade.sql').read_text(encoding='utf-8')
body = source[source.index('create or replace function public.classroom_rpc'):source.index('-- Admin authorization')]
body = body.replace("'settings','review')", "'settings','review','flag','account_history','account_resume','link_account')", 1)
body = body.replace("'version',2", "'version',3")
body = body.replace("""    select * into m from public.classroom_members where room_id=r.id and token_hash=md5(secret);
    if not found then
      if r.status<>'waiting'""", """    select * into m from public.classroom_members where room_id=r.id and token_hash=md5(secret);
    if not found and payload->>'account'='true' and auth.uid() is not null then
      select members.* into m from public.classroom_members members
        join public.classroom_account_links links on links.member_id=members.id
        where links.room_id=r.id and links.user_id=auth.uid();
      if found then update public.classroom_members set token_hash=md5(secret),revision=revision+1 where id=m.id returning * into m; end if;
    end if;
    if not found then
      if r.status<>'waiting'""", 1)
body = body.replace("  secret:=payload->>'token';", """  if action='account_history' then
    if auth.uid() is null then raise exception 'Masuk ke akun terlebih dahulu.'; end if;
    return jsonb_build_object('items',coalesce((select jsonb_agg(jsonb_build_object(
      'code',rooms.code,'title',rooms.title,'status',rooms.status,'createdAt',extract(epoch from rooms.created_at)*1000)
      order by rooms.created_at desc) from public.classroom_account_links links
      join public.classroom_rooms rooms on rooms.id=links.room_id where links.user_id=auth.uid()),'[]'::jsonb));
  end if;
  secret:=payload->>'token';""")
body = body.replace("  moment:=clock_timestamp();", """  if action='account_resume' then
    if auth.uid() is null then raise exception 'Masuk ke akun terlebih dahulu.'; end if;
    select members.* into m from public.classroom_members members
      join public.classroom_account_links links on links.member_id=members.id
      where links.room_id=r.id and links.user_id=auth.uid();
    if not found then raise exception 'Sesi ini tidak terhubung ke akun Anda.'; end if;
    update public.classroom_members set token_hash=md5(secret),revision=revision+1 where id=m.id;
    is_host:=false;
    action:='state';
  end if;
  moment:=clock_timestamp();""", 1)
body = body.replace("if moment>=r.expires_at then", """if moment>=r.expires_at and not (r.status='closed' and action='state' and exists(
    select 1 from public.classroom_account_links links join public.classroom_members members on members.id=links.member_id
    where links.room_id=r.id and links.user_id=auth.uid() and members.token_hash=md5(secret))) then""")
needle = "  if action in ('start','finish','reveal','remove','reset_member','transfer','settings','review') and not is_host"
body = body.replace(needle, """  if action='link_account' or (action='join' and payload->>'account'='true') then
    if auth.uid() is null or is_host then raise exception 'Masuk dengan akun peserta terlebih dahulu.'; end if;
    insert into public.classroom_account_links(user_id,room_id,member_id) values(auth.uid(),r.id,m.id)
      on conflict(user_id,room_id) do nothing;
    if not exists(select 1 from public.classroom_account_links where user_id=auth.uid() and room_id=r.id and member_id=m.id)
      then raise exception 'Akun ini sudah memiliki peserta lain di sesi yang sama.'; end if;
  end if;
  if action='flag' then
    if is_host or r.status<>'running' or m.submitted_at is not null then raise exception 'Penandaan hanya tersedia saat mengerjakan ujian.'; end if;
    if jsonb_typeof(payload->'flags') is distinct from 'array' then raise exception 'Daftar penanda tidak valid.'; end if;
    if jsonb_array_length(payload->'flags')>jsonb_array_length(r.questions) or exists(
      select 1 from jsonb_array_elements(payload->'flags') f where jsonb_typeof(f)<>'string'
        or not exists(select 1 from jsonb_array_elements(r.questions) item where item->'id'=f))
      then raise exception 'Penanda harus merujuk soal sesi ini.'; end if;
    update public.classroom_members set flags=payload->'flags' where id=m.id returning * into m;
  end if;
""" + needle)
body = body.replace("'ready',m.ready,'answers',m.answers,", """'ready',m.ready,'answers',m.answers,'flags',m.flags,
    'accountLinked',exists(select 1 from public.classroom_account_links where member_id=m.id and user_id=auth.uid()),""")
schema = """-- Classroom v3: private flags and optional account-linked history.
-- Run after 20261019_classroom_upgrade.sql. Preserves existing rooms, questions and answers.
begin;
alter table public.classroom_members add column if not exists flags jsonb not null default '[]'::jsonb;
create table if not exists public.classroom_account_links (
  user_id uuid not null references auth.users(id) on delete cascade,
  room_id uuid not null references public.classroom_rooms(id) on delete cascade,
  member_id uuid not null unique references public.classroom_members(id) on delete cascade,
  primary key(user_id,room_id)
);
alter table public.classroom_account_links enable row level security;
revoke all on public.classroom_account_links from public,anon,authenticated;
"""
Path('supabase/migrations/20261022_classroom_learners.sql').write_text(schema+body+'\ncommit;\n',encoding='utf-8')
