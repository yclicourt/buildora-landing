import Reveal from "./Reveal";

const FAQS = [
  {
    q: "¿El código generado es mío?",
    a: "Sí, 100%. Sin lock-in, sin runtime de Buildora en tu proyecto, sin telemetría. Es tu código desde el primer archivo.",
  },
  {
    q: "¿Necesito saber DevOps para usarlo?",
    a: "No. Docker y CI vienen configurados y probados. Si sabes DevOps, puedes ajustarlo todo; si no, funciona tal cual.",
  },
  {
    q: "¿Y si mi stack no está entre los caminos?",
    a: "Los fundadores votan los próximos caminos. Cada camino nuevo se construye primero como app real y probada, y después se convierte en plantilla.",
  },
  {
    q: "¿Cuándo tendré acceso?",
    a: "Por orden de reserva. Los fundadores reciben su acceso en cuanto su camino está listo, antes que el público general.",
  },
];

export default function Faq() {
  return (
    <Reveal
      id="faq"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-10 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        Preguntas frecuentes.
      </h2>
      <div className="mx-auto max-w-[720px]">
        {FAQS.map((faq) => (
          <details
            key={faq.q}
            className="mb-2.5 rounded-xl border border-line bg-panel px-[22px] py-[18px]"
          >
            <summary className="cursor-pointer text-base font-bold">
              {faq.q}
            </summary>
            <p className="mt-2 text-[15px] text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
