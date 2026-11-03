create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  interest text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Solo insertar para anon: la lista no se lee, no se actualiza
-- ni se borra desde el navegador.
create policy "waitlist_insert_anon"
  on public.waitlist
  for insert
  to anon
  with check (true);
