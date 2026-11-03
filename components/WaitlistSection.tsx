import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <Reveal
      id="reserva"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <div className="rounded-[20px] bg-ink px-8 py-14 text-center text-cream">
        <h2 className="mb-3 text-[clamp(28px,4vw,38px)] tracking-[-0.02em]">
          Deja de pagar el setup con días de tu vida.
        </h2>
        <p className="mx-auto mb-6 max-w-[560px] text-[#D6D3D1]">
          Reserva tu acceso anticipado y sé de los primeros en generar con
          Buildora. Sin spam: solo el aviso cuando tu camino esté listo.
        </p>
        <WaitlistForm />
      </div>
    </Reveal>
  );
}
