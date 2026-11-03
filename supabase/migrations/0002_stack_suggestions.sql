create table public.stack_suggestions (
  id uuid primary key default gen_random_uuid(),
  stack text not null,
  description text,
  email text,
  created_at timestamptz not null default now()
);

alter table public.stack_suggestions enable row level security;

-- Solo insertar para anon: las sugerencias no se leen, no se
-- actualizan ni se borran desde el navegador. Sin deduplicación:
-- una sugerencia puede repetirse.
create policy "stack_suggestions_insert_anon"
  on public.stack_suggestions
  for insert
  to anon
  with check (true);
