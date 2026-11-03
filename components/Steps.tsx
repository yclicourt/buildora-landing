import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Elige tu stack",
    text: "El que tu proyecto ya usa. Sin combinaciones infinitas: caminos dorados, probados de verdad.",
  },
  {
    num: "02",
    title: "Configura lo esencial",
    text: "Nombre, base de datos, autenticación. Solo lo que cambia entre proyectos.",
  },
  {
    num: "03",
    title: "Genera",
    text: "Buildora arma el proyecto completo con su estructura, su Docker y su CI.",
  },
  {
    num: "04",
    title: "Descarga y arranca",
    text: "Un ZIP con README de arranque. docker compose up y a construir.",
  },
];

export default function Steps() {
  return (
    <Reveal className="mx-auto max-w-[1080px] px-6 py-[72px] max-md:py-12">
      <h2 className="mx-auto mb-10 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        De la idea al proyecto en 4 pasos.
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="step rounded-[14px] border border-line bg-panel p-6"
          >
            <span className="text-[13px] font-extrabold tracking-[0.12em] text-ember-dark">
              {step.num}
            </span>
            <h3 className="my-2.5 text-[17px]">{step.title}</h3>
            <p className="text-[14.5px] text-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
