import Reveal from "./Reveal";
import SuggestionsForm from "./SuggestionsForm";

export default function SuggestionsSection() {
  return (
    <Reveal
      id="sugerencias"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        ¿Qué stack quieres ver en Buildora?
      </h2>
      <p className="mx-auto mb-8 max-w-[620px] text-center text-[17px] text-muted">
        Después del camino 2 (React + Vite + Django, ya anunciado), las
        sugerencias de los devs deciden qué camino se construye después.
      </p>
      <SuggestionsForm />
    </Reveal>
  );
}
