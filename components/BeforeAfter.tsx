import Reveal from "./Reveal";

const MANUAL = [
  "2–4 días de setup antes de la primera pantalla",
  "Decisiones de estructura que se posponen… y se pagan después",
  "Cada proyecto arranca distinto, ninguno hereda lo aprendido",
  "Auth y CI a medias hasta que algo se rompe",
];

const WITH_BUILDORA = [
  "Minutos, no días: el andamiaje sale generado y probado",
  "La misma estructura sólida en todos tus proyectos",
  "Auth, Docker y CI funcionando desde el primer commit",
  "Empiezas por la lógica de negocio, que es lo que cobra",
];

export default function BeforeAfter() {
  return (
    <Reveal className="mx-auto max-w-[1080px] px-6 py-[72px] max-md:py-12">
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        El mismo proyecto, dos arranques.
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        La diferencia no es talento. Es cuántos días se van antes de escribir la
        primera funcionalidad.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-[14px] border border-line bg-white p-7">
          <h3 className="mb-3 text-lg">A mano</h3>
          <ul>
            {MANUAL.map((item) => (
              <li key={item} className="mb-2 ml-[18px] text-[15px] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[14px] bg-ink p-7 text-cream">
          <h3 className="mb-3 text-lg">Con Buildora</h3>
          <ul>
            {WITH_BUILDORA.map((item) => (
              <li key={item} className="mb-2 ml-[18px] text-[15px] text-[#D6D3D1]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
