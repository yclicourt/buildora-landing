import Reveal from "./Reveal";

const CARDS = [
  {
    ico: "🔐",
    title: "Autenticación otra vez",
    text: "Registro, login, refresh, logout, rutas protegidas. Lo has escrito diez veces y siempre hay un detalle que se escapa.",
  },
  {
    ico: "🐳",
    title: "Docker y entorno",
    text: "Compose, variables de entorno, base de datos local, Redis. Un día entero para que el proyecto «por fin arranque».",
  },
  {
    ico: "✅",
    title: "CI que nunca llega",
    text: "El pipeline queda para «después del MVP». Después nunca llega, y el primer deploy duele.",
  },
];

export default function Problem() {
  return (
    <Reveal className="mx-auto max-w-[1080px] px-6 py-[72px] max-md:py-12">
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        Montar un proyecto nuevo siempre es lo mismo.
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        Y nunca es la parte que te gusta construir. Es la parte que retrasa todo
        lo demás.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="card rounded-[14px] border border-line bg-panel p-6 transition-shadow hover:shadow-[0_12px_30px_rgba(28,25,23,0.08)]"
          >
            <div className="mb-2.5 text-2xl">{card.ico}</div>
            <h3 className="mb-1.5 text-[17px]">{card.title}</h3>
            <p className="text-[14.5px] text-muted">{card.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
