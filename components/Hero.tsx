import Demo from "./Demo";

const STRIP_TEXT =
  "Next.js ✦ NestJS ✦ Prisma ✦ PostgreSQL ✦ Redis ✦ Docker ✦ GitHub Actions ✦ JWT Auth ✦ Tailwind ✦ TypeScript ✦ ";

export default function Hero() {
  return (
    <header className="mx-auto max-w-[1080px] px-6 pb-10 pt-[72px] text-center max-md:pb-6 max-md:pt-12">
      <span className="hero-anim-badge inline-block rounded-lg border border-soft-line bg-soft px-3.5 py-[7px] text-xs font-extrabold tracking-[0.14em] text-ember-dark">
        ACCESO ANTICIPADO · PRÓXIMAMENTE
      </span>
      <h1 className="hero-anim-title mx-auto my-[22px] text-[clamp(38px,6vw,60px)] leading-[1.05] tracking-[-0.03em]">
        Tu próximo proyecto,
        <br />
        <em className="not-italic text-ember">sin empezar de cero.</em>
      </h1>
      <p className="hero-anim-lead mx-auto mb-7 max-w-[640px] text-[19px] text-muted">
        Buildora genera el esqueleto completo de tu aplicación: frontend,
        backend, base de datos, autenticación, Docker y CI. Tú empiezas por la
        lógica de negocio, no por la configuración.
      </p>
      <div className="hero-anim-cta flex flex-wrap justify-center gap-3">
        <a className="btn btn-ember" href="#precio">
          Reserva tu acceso anticipado
        </a>
        <a className="btn btn-ghost" href="#demo">
          Ver qué genera
        </a>
      </div>
      <p className="hero-anim-note mt-4 text-sm text-muted">
        Camino dorado 1: Next.js + NestJS + Prisma + PostgreSQL + Redis · El
        código generado es 100% tuyo
      </p>

      <div className="strip mx-auto mt-7" aria-hidden="true">
        <div className="strip-track">
          <span className="whitespace-nowrap pr-2 text-[13px] font-bold tracking-[0.12em] text-[#A8A29E]">
            {STRIP_TEXT}
          </span>
          <span className="whitespace-nowrap pr-2 text-[13px] font-bold tracking-[0.12em] text-[#A8A29E]">
            {STRIP_TEXT}
          </span>
        </div>
      </div>

      <div id="demo" className="scroll-mt-20">
        <Demo />
      </div>
    </header>
  );
}
