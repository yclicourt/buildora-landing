# Buildora — Landing

Landing de acceso anticipado de **Buildora**, el generador de andamiajes
(scaffolds) para proyectos fullstack. El primer camino dorado es
Next.js + NestJS + Prisma + PostgreSQL + Redis + auth + Docker + CI.

La página recoge reservas (waitlist) por email. El copy es honesto:
el generador está en desarrollo y el acceso se abre por orden de reserva.
No hay testimonios ni estadísticas inventadas.

## Stack

- Next.js 16 (App Router, estático) + React 19 + TypeScript estricto
- Tailwind CSS v4
- Supabase (tabla `waitlist`, solo para guardar emails)
- Vercel Hobby

Diseño Forja v2.1: crema `#FAF7F2`, tinta `#1C1917`, brasa `#EA580C`.
Botones rectangulares premium (44px de alto, 10px de radio, sin píldoras).

## Desarrollo local

```bash
pnpm install
cp .env.example .env.local   # y rellena con valores reales (ver abajo)
pnpm dev
```

Scripts:

```bash
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción
pnpm start      # sirve el build
pnpm typecheck  # tsc --noEmit
```

## Supabase (proyecto de CajaYa)

1. Se reutiliza el proyecto de CajaYa (el plan gratis solo permite
   2 proyectos y ambos slots están ocupados). NO se crea un proyecto
   nuevo y NO se usa el proyecto de WelcomeHome (es de un cliente).
2. En el editor SQL del proyecto de CajaYa, ejecuta el archivo
   `supabase/migrations/0001_waitlist.sql`. Crea la tabla `waitlist`
   (email único) con Row Level Security y una única política: insertar
   para `anon`. No hay políticas de lectura, actualización ni borrado.
3. Copia la URL del proyecto y la clave `anon` (pública) desde
   Project Settings → API.

## Variables de entorno

Solo en servidor, nunca con prefijo `NEXT_PUBLIC_`:

```bash
SUPABASE_URL=https://txdnqglttdgdtomuqaje.supabase.co
SUPABASE_ANON_KEY=tu-clave-anon-del-proyecto-cajaya
```

En local van en `.env.local` (ignorado por git). En producción se
configuran en Vercel (Project → Settings → Environment Variables).

## Deploy en Vercel Hobby

1. Sube el repo a GitHub (rama `main`).
2. En Vercel: New Project → importa el repo → framework Next.js.
3. Añade las dos variables de entorno anteriores (Production).
4. Deploy. Cada push a `main` redespliega solo.

## API de waitlist

`POST /api/waitlist` con `{ "email": "...", "interest": "..." }`
(`interest` opcional). Respuestas:

- `200 { ok: true }` — guardado.
- `200 { ok: true, already: true }` — el email ya estaba en la lista
  (no es un error: la UI muestra «ya estás en la lista»).
- `400` — cuerpo o email inválido.
- `405` — cualquier método distinto de POST.
- `500` — fallo del servidor, mensaje genérico (sin detalles internos).
