import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <Reveal
      id="precio"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        Gratis. Para todo el mundo.
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        Las plantillas y el generador son gratis. Sin suscripción, sin pago
        único, sin tarjeta. La lista de espera solo sirve para avisarte
        cuando tu camino esté listo.
      </p>
      <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-[14px] border border-line bg-panel p-8 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-muted">
            CAMINO 1 · DISPONIBLE
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            Gratis
          </div>
          <p className="text-[14.5px] text-muted">
            Next.js + NestJS + Prisma + PostgreSQL + Redis
          </p>
          <ul className="my-[18px] list-none text-left">
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0">
              Andamiajes ilimitados de este camino
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Auth, Docker y CI funcionando desde el primer commit
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              El código generado es 100% tuyo
            </li>
          </ul>
          <a className="btn btn-ghost" href="#reserva">
            Avísame de novedades
          </a>
        </div>
        <div className="rounded-[14px] border-2 border-ember bg-panel p-8 text-center shadow-[0_14px_34px_rgba(234,88,12,0.14)]">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-ember-dark">
            CAMINO 2 · DISPONIBLE
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            Gratis
          </div>
          <p className="text-[14.5px] text-muted">
            React + Vite + Django + PostgreSQL + Redis
          </p>
          <ul className="my-[18px] list-none text-left">
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0">
              Construido primero como app real y probada
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Ya convertido en plantilla, como el camino 1
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Auth, Docker y CI funcionando desde el primer commit
            </li>
          </ul>
          <a className="btn btn-ember" href="#reserva">
            Avísame de novedades
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[760px] rounded-xl border border-soft-line bg-soft px-6 py-5 text-[15px]">
        <b className="text-ember-dark">Honestidad de fundador:</b> el generador
        está en desarrollo. Apuntarte hoy te pone primero en la fila de
        avisos; el acceso se abre por orden de reserva.
      </div>
    </Reveal>
  );
}
