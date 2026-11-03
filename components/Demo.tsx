"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Tone = "dim" | "ok" | "ember" | "plain";
type Segment = { text: string; tone: Tone };
type Line = Segment[];

const dim = (text: string): Segment => ({ text, tone: "dim" });
const ok = (text: string): Segment => ({ text, tone: "ok" });
const ember = (text: string): Segment => ({ text, tone: "ember" });
const plain = (text: string): Segment => ({ text, tone: "plain" });
const blank: Line = [];

const TREE_1: Line[] = [
  [dim("$ buildora generate mi-proyecto --stack next-nest")],
  blank,
  [ok("✔ "), plain("Resolviendo camino dorado: Next.js + NestJS")],
  [ok("✔ "), plain("Generando frontend (Next.js + Tailwind)")],
  [ok("✔ "), plain("Generando backend (NestJS hexagonal + Prisma)")],
  [ok("✔ "), plain("Auth JWT + refresh + ruta protegida")],
  [ok("✔ "), plain("docker-compose.yml (PostgreSQL + Redis)")],
  [ok("✔ "), plain(".github/workflows/ci.yml")],
  [ok("✔ "), plain("README de arranque")],
  blank,
  [ember("mi-proyecto/")],
  [plain("├── apps/web "), dim("# Next.js")],
  [plain("├── apps/api "), dim("# NestJS")],
  [plain("├── docker-compose.yml")],
  [plain("├── .github/workflows/ci.yml")],
  [plain("└── README.md")],
  blank,
  [ok("Listo en 47s. "), dim("docker compose up y a construir.")],
];

const TREE_2: Line[] = [
  [dim("$ buildora generate mi-proyecto --stack react-django")],
  blank,
  [ember("Este camino todavía está en el horno.")],
  [dim("Se construye primero como app real y probada,")],
  [dim("y después se convierte en plantilla, como el camino 1.")],
  blank,
  [dim("Sugiere qué camino sigue.")],
  [dim("Tu sugerencia cuenta desde el día uno.")],
];

const IDLE_1: Line[] = [
  [dim("$ buildora generate mi-proyecto --stack next-nest")],
  blank,
  [dim("Pulsa «Generar» para ver el andamiaje.")],
];

const IDLE_2: Line[] = [
  [dim("$ buildora generate mi-proyecto --stack react-django")],
  blank,
  [ember("Próximamente. "), dim("Pulsa «Generar» para ver el estado.")],
];

const TONE_CLASS: Record<Tone, string> = {
  dim: "text-[#8A8580]",
  ok: "text-[#4ADE80]",
  ember: "text-[#FB923C]",
  plain: "text-[#EDE9E3]",
};

export default function Demo() {
  const [stack, setStack] = useState<1 | 2>(1);
  const [lines, setLines] = useState<Line[]>(IDLE_1);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  const generate = useCallback(
    (which: 1 | 2) => {
      if (busy) return;
      setBusy(true);
      const target = which === 1 ? TREE_1 : TREE_2;
      setLines([]);
      let i = 0;
      timer.current = setInterval(() => {
        if (i >= target.length) {
          stop();
          setBusy(false);
          return;
        }
        const line = target[i];
        i += 1;
        setLines((prev) => [...prev, line]);
      }, 220);
    },
    [busy, stop],
  );

  const pickStack = useCallback(
    (n: 1 | 2) => {
      if (busy) return;
      setStack(n);
      setLines(n === 1 ? IDLE_1 : IDLE_2);
    },
    [busy],
  );

  // Como en la maqueta: genera solo al cargar, a los 900ms.
  useEffect(() => {
    const t = setTimeout(() => generate(1), 900);
    return () => {
      clearTimeout(t);
      stop();
    };
    // Solo al montar: el generador inicial es siempre el camino 1.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto mt-12 overflow-hidden rounded-2xl border border-line bg-panel text-left shadow-[0_18px_50px_rgba(28,25,23,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-5">
        <h2 className="text-lg tracking-[-0.01em]">
          Elige tu stack. Mira lo que genera.
        </h2>
        <span className="text-[13px] text-muted">
          Demo visual · el generador está en desarrollo
        </span>
      </div>

      <div className="grid grid-cols-1 border-b border-line md:grid-cols-2">
        <button
          type="button"
          onClick={() => pickStack(1)}
          className={`border-b border-line p-[18px_24px] text-left transition-colors hover:bg-[#FFF9F3] md:border-b-0 md:border-r ${
            stack === 1 ? "bg-[#FFF4EC] shadow-[inset_0_-3px_0_var(--color-ember)]" : ""
          }`}
        >
          <b className="block text-[15px]">Next.js + NestJS</b>
          <small className="text-[13px] text-muted">
            Prisma · PostgreSQL · Redis · Auth JWT · Docker · CI
          </small>
          <br />
          <span
            className={`mt-2 inline-block rounded-md px-2 py-[3px] text-[11px] font-extrabold tracking-[0.1em] ${
              stack === 1 ? "bg-ember text-white" : "bg-[#EDE9E3] text-muted"
            }`}
          >
            DISPONIBLE EN ACCESO ANTICIPADO
          </span>
        </button>
        <button
          type="button"
          onClick={() => pickStack(2)}
          className={`p-[18px_24px] text-left opacity-[0.62] transition-colors hover:bg-[#FFF9F3] ${
            stack === 2 ? "bg-[#FFF4EC] opacity-100 shadow-[inset_0_-3px_0_var(--color-ember)]" : ""
          }`}
        >
          <b className="block text-[15px]">React + Vite + Django</b>
          <small className="text-[13px] text-muted">
            PostgreSQL · Redis · Auth · Docker · CI
          </small>
          <br />
          <span
            className={`mt-2 inline-block rounded-md px-2 py-[3px] text-[11px] font-extrabold tracking-[0.1em] ${
              stack === 2 ? "bg-ember text-white" : "bg-[#EDE9E3] text-muted"
            }`}
          >
            PRÓXIMAMENTE · VOTA POR ESTE CAMINO
          </span>
        </button>
      </div>

      <div className="min-h-[280px] bg-dark px-6 py-[22px] font-mono text-[13.5px] leading-[1.75] whitespace-pre-wrap text-[#EDE9E3]">
        {lines.map((line, li) => (
          <div key={li}>
            {line.length === 0 ? (
              <br />
            ) : (
              line.map((seg, si) => (
                <span key={si} className={TONE_CLASS[seg.tone]}>
                  {seg.text}
                </span>
              ))
            )}
          </div>
        ))}
        {!busy && <span className="term-caret" />}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-[#FDFBF7] px-6 py-4">
        <span className="text-[13px] text-muted">
          El andamiaje incluye estructura hexagonal, auth, Docker Compose y CI
          en verde.
        </span>
        <button
          type="button"
          onClick={() => generate(stack)}
          disabled={busy}
          className="btn btn-ember"
        >
          {stack === 1 ? "Generar andamiaje →" : "Ver estado →"}
        </button>
      </div>
    </div>
  );
}
