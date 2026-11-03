import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <Reveal
      id="precio"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        Acceso anticipado para fundadores.
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        Pago único. Sin suscripción. Los fundadores entran primero y fijan su
        precio para siempre.
      </p>
      <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-[14px] border border-line bg-panel p-8 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-muted">
            UN CAMINO
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            $199
          </div>
          <p className="text-[14.5px] text-muted">pago único</p>
          <ul className="my-[18px] list-none text-left">
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0">
              Un camino dorado a elegir
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Andamiajes ilimitados de ese camino
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Actualizaciones de ese camino
            </li>
          </ul>
          <a className="btn btn-ghost" href="#reserva">
            Reservar un camino
          </a>
        </div>
        <div className="rounded-[14px] border-2 border-ember bg-panel p-8 text-center shadow-[0_14px_34px_rgba(234,88,12,0.14)]">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-ember-dark">
            TODOS LOS CAMINOS
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            $299
          </div>
          <p className="text-[14.5px] text-muted">pago único</p>
          <ul className="my-[18px] list-none text-left">
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0">
              Todos los caminos actuales y futuros
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Andamiajes ilimitados
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Voto en los próximos caminos
            </li>
            <li className="border-t border-line py-1.5 text-[14.5px] text-muted">
              Acceso antes que nadie a cada lanzamiento
            </li>
          </ul>
          <a className="btn btn-ember" href="#reserva">
            Reservar todo
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[760px] rounded-xl border border-soft-line bg-soft px-6 py-5 text-[15px]">
        <b className="text-ember-dark">Honestidad de fundador:</b> el generador
        está en desarrollo. Reservar hoy te pone primero en la fila y te asegura
        el precio; el acceso se abre por orden de reserva. Si no cumple lo
        prometido, lo sabrás antes de pagar el resto.
      </div>
    </Reveal>
  );
}
