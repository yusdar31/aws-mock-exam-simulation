-- Review and apply with the Supabase SQL editor / migration CLI.
-- Grants + RLS are part of this migration. No service_role key belongs in the browser.
begin;
create table if not exists public.exam_history (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  exam_type text not null, submitted_at bigint not null, score integer not null,
  total_questions integer not null, score_rate integer not null, duration_seconds integer not null,
  domain_performance jsonb not null default '[]'
);
alter table public.exam_history add column if not exists attempt_id text;
alter table public.exam_history add column if not exists lang text not null default 'en';
alter table public.exam_history add column if not exists mode text not null default 'practice';
alter table public.exam_history add column if not exists session_snapshot jsonb;
alter table public.exam_history add column if not exists assignment_id uuid;
create unique index if not exists history_attempt_unique on public.exam_history(attempt_id);
create index if not exists history_user_time on public.exam_history(user_id,submitted_at desc);

create table if not exists public.exam_sessions (
  user_id uuid primary key references auth.users(id) on delete cascade,
  snapshot jsonb not null, updated_at bigint not null
);
create table if not exists public.app_roles (user_id uuid primary key references auth.users(id) on delete cascade, role text not null check(role in ('coach','admin')));
create table if not exists public.batches (
  id uuid primary key default gen_random_uuid(), name text not null check(length(name) between 1 and 100),
  coach_id uuid not null references auth.users(id), join_code text unique not null default replace(gen_random_uuid()::text,'-','')
);
create table if not exists public.batch_members (
  batch_id uuid not null references public.batches(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade, primary key(batch_id,user_id)
);
create table if not exists public.assignments (
  id uuid primary key default gen_random_uuid(), batch_id uuid not null references public.batches(id) on delete cascade,
  title text not null, config jsonb not null, due_at timestamptz not null
);
create or replace function public.is_coach() returns boolean language sql stable security definer set search_path='' as $$
  select coalesce((auth.jwt()->'app_metadata'->>'role') in ('coach','admin'),false)
    or exists(select 1 from public.app_roles where user_id=auth.uid() and role in ('coach','admin'));
$$;
create or replace function public.is_batch_member(target uuid) returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.batch_members where batch_id=target and user_id=auth.uid());
$$;
create or replace function public.owns_batch(target uuid) returns boolean language sql stable security definer set search_path='' as $$
  select exists(select 1 from public.batches where id=target and coach_id=auth.uid());
$$;
create or replace function public.assignment_allowed(target uuid) returns boolean language sql stable security definer set search_path='' as $$
  select target is null or exists(select 1 from public.assignments where id=target and (public.is_batch_member(batch_id) or public.owns_batch(batch_id)));
$$;

alter table public.exam_history enable row level security;
alter table public.exam_sessions enable row level security;
alter table public.app_roles enable row level security;
alter table public.batches enable row level security;
alter table public.batch_members enable row level security;
alter table public.assignments enable row level security;
-- Remove old permissive policies so access cannot be widened by an OR policy.
do $$ declare p record; begin
  for p in select tablename,policyname from pg_policies where schemaname='public' and tablename in ('exam_history','exam_sessions','app_roles','batches','batch_members','assignments') loop
    execute format('drop policy %I on public.%I',p.policyname,p.tablename);
  end loop;
end $$;
revoke all on public.exam_history,public.exam_sessions,public.app_roles,public.batches,public.batch_members,public.assignments from anon,authenticated;
grant select,insert,update on public.exam_history to authenticated;
grant select,insert,update,delete on public.exam_sessions to authenticated;
grant select on public.app_roles to authenticated;
grant select,insert,update,delete on public.batches,public.assignments to authenticated;
grant select on public.batch_members to authenticated;
create policy history_read on public.exam_history for select to authenticated using(user_id=auth.uid() or exists(select 1 from public.assignments where id=assignment_id and public.owns_batch(batch_id)));
create policy history_insert on public.exam_history for insert to authenticated with check(user_id=auth.uid() and public.assignment_allowed(assignment_id));
create policy history_update on public.exam_history for update to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid() and public.assignment_allowed(assignment_id));
create policy session_own on public.exam_sessions for all to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid() and snapshot->>'userId'=auth.uid()::text);
create policy own_role on public.app_roles for select to authenticated using(user_id=auth.uid());
create policy batch_read on public.batches for select to authenticated using(coach_id=auth.uid() or public.is_batch_member(id));
create policy batch_insert on public.batches for insert to authenticated with check(coach_id=auth.uid() and public.is_coach());
create policy batch_update on public.batches for update to authenticated using(coach_id=auth.uid()) with check(coach_id=auth.uid() and public.is_coach());
create policy batch_delete on public.batches for delete to authenticated using(coach_id=auth.uid());
create policy member_read on public.batch_members for select to authenticated using(user_id=auth.uid() or public.owns_batch(batch_id));
create policy assignment_read on public.assignments for select to authenticated using(public.is_batch_member(batch_id) or public.owns_batch(batch_id));
create policy assignment_insert on public.assignments for insert to authenticated with check(public.owns_batch(batch_id));
create policy assignment_update on public.assignments for update to authenticated using(public.owns_batch(batch_id)) with check(public.owns_batch(batch_id));
create policy assignment_delete on public.assignments for delete to authenticated using(public.owns_batch(batch_id));
create or replace function public.join_batch(code text) returns void language plpgsql security definer set search_path='' as $$
declare target uuid; begin
  if auth.uid() is null then raise exception 'Login diperlukan'; end if;
  select id into target from public.batches where join_code=code;
  if target is null then raise exception 'Kode kelas tidak valid'; end if;
  insert into public.batch_members(batch_id,user_id) values(target,auth.uid()) on conflict do nothing;
end $$;
create or replace function public.batch_report(target_batch uuid)
returns table(user_id uuid,name text,assignment_id uuid,score_rate integer,domain_performance jsonb,submitted_at bigint)
language plpgsql security definer set search_path='' as $$ begin
  if not public.owns_batch(target_batch) then raise exception 'Akses ditolak'; end if;
  return query select h.user_id,coalesce(u.raw_user_meta_data->>'name','Peserta'),h.assignment_id,h.score_rate,h.domain_performance,h.submitted_at
    from public.exam_history h join public.assignments a on a.id=h.assignment_id join auth.users u on u.id=h.user_id
    where a.batch_id=target_batch order by h.submitted_at desc limit 500;
end $$;
create or replace function public.protect_session_timestamp() returns trigger language plpgsql set search_path='' as $$ begin
  if exists(select 1 from public.exam_history where user_id=new.user_id and attempt_id=new.snapshot->>'id') then return null; end if;
  if tg_op='UPDATE' and new.updated_at<old.updated_at then return null; end if;
  return new;
end $$;
drop trigger if exists protect_session_timestamp on public.exam_sessions;
create trigger protect_session_timestamp before insert or update on public.exam_sessions for each row execute function public.protect_session_timestamp();
create or replace function public.preserve_submitted_attempt() returns trigger language plpgsql set search_path='' as $$ begin
  return old;
end $$;
drop trigger if exists preserve_submitted_attempt on public.exam_history;
create trigger preserve_submitted_attempt before update on public.exam_history for each row execute function public.preserve_submitted_attempt();
revoke all on function public.preserve_submitted_attempt() from public;
revoke all on function public.is_coach(),public.is_batch_member(uuid),public.owns_batch(uuid),public.assignment_allowed(uuid),public.join_batch(text),public.batch_report(uuid),public.protect_session_timestamp() from public;
grant execute on function public.is_coach(),public.is_batch_member(uuid),public.owns_batch(uuid),public.assignment_allowed(uuid),public.join_batch(text),public.batch_report(uuid) to authenticated;
commit;
