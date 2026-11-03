import Reveal from "./Reveal";

const ITEMS = [
  {
    ico: "🔐",
    title: "Auth completa",
    text: "JWT con refresh, registro, login, logout y ruta protegida con sesión real.",
  },
  {
    ico: "🧱",
    title: "Estructura hexagonal",
    text: "Dominio separado de infraestructura. El código crece sin enredarse.",
  },
  {
    ico: "🐘",
    title: "PostgreSQL + Prisma",
    text: "Esquema, migraciones y cliente listos. Redis incluido para caché y colas.",
  },
  {
    ico: "🐳",
    title: "Docker Compose",
    text: "App, base de datos y Redis con un solo comando. Igual en tu máquina y en producción.",
  },
  {
    ico: "✅",
    title: "CI en verde",
    text: "Pipeline de instalación, typecheck, tests y build. Mergear solo cuando está en verde.",
  },
  {
    ico: "📖",
    title: "README de arranque",
    text: "Cómo levantar, cómo probar, dónde va cada cosa. Sin adivinar.",
  },
];

export default function Included() {
  return (
    <Reveal
      id="incluye"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        Qué trae un andamiaje Buildora.
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        No es un «hola mundo». Es la base que un proyecto real necesita el día
        uno.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="card rounded-[14px] border border-line bg-panel p-6 transition-shadow hover:shadow-[0_12px_30px_rgba(28,25,23,0.08)]"
          >
            <div className="mb-2.5 text-2xl">{item.ico}</div>
            <h3 className="mb-1.5 text-[17px]">{item.title}</h3>
            <p className="text-[14.5px] text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
