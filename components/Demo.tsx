"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";
import type { Tone } from "@/lib/dict";

const TONE_CLASS: Record<Tone, string> = {
  dim: "text-[#8A8580]",
  ok: "text-[#4ADE80]",
  ember: "text-[#FB923C]",
  plain: "text-[#EDE9E3]",
};

export default function Demo() {
  const { t } = useLanguage();
  const [stack, setStack] = useState<1 | 2>(1);
  const [lines, setLines] = useState(t.demo.idle1);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef = useRef(false);

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
      busyRef.current = true;
      const target = which === 1 ? t.demo.tree1 : t.demo.tree2;
      setLines([]);
      let i = 0;
      timer.current = setInterval(() => {
        if (i >= target.length) {
          stop();
          setBusy(false);
          busyRef.current = false;
          return;
        }
        const line = target[i];
        i += 1;
        setLines((prev) => [...prev, line]);
      }, 220);
    },
    [busy, stop, t],
  );

  const pickStack = useCallback(
    (n: 1 | 2) => {
      if (busy) return;
      setStack(n);
      setLines(n === 1 ? t.demo.idle1 : t.demo.idle2);
    },
    [busy, t],
  );

  // Al cambiar de idioma, el terminal vuelve al estado inicial del stack
  // activo (salvo que esté generando en ese momento).
  useEffect(() => {
    if (!busyRef.current) {
      setLines(stack === 1 ? t.demo.idle1 : t.demo.idle2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  // Como en la maqueta: genera solo al cargar, a los 900ms.
  useEffect(() => {
    const tm = setTimeout(() => generate(1), 900);
    return () => {
      clearTimeout(tm);
      stop();
    };
    // Solo al montar: el generador inicial es siempre el camino 1.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto mt-12 overflow-hidden rounded-2xl border border-line bg-panel text-left shadow-[0_18px_50px_rgba(28,25,23,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-6 py-5">
        <div className="flex items-center gap-2 text-ember-dark">
          <SectionIcon name="terminal" chip={false} />
          <h2 className="text-lg tracking-[-0.01em]">{t.demo.title}</h2>
        </div>
        <span className="text-[13px] text-muted">{t.demo.note}</span>
      </div>

      <div className="grid grid-cols-1 border-b border-line md:grid-cols-2">
        <button
          type="button"
          onClick={() => pickStack(1)}
          className={`border-b border-line p-[18px_24px] text-left transition-colors hover:bg-tab-hover md:border-b-0 md:border-r ${
            stack === 1 ? "bg-tab-active shadow-[inset_0_-3px_0_var(--color-ember)]" : ""
          }`}
        >
          <b className="block text-[15px]">Next.js + NestJS</b>
          <small className="text-[13px] text-muted">{t.demo.tab1small}</small>
          <br />
          <span
            className={`mt-2 inline-block rounded-md px-2 py-[3px] text-[11px] font-extrabold tracking-[0.1em] ${
              stack === 1 ? "bg-ember text-white" : "bg-tab-badge text-muted"
            }`}
          >
            {t.demo.badge}
          </span>
        </button>
        <button
          type="button"
          onClick={() => pickStack(2)}
          className={`p-[18px_24px] text-left transition-colors hover:bg-tab-hover ${
            stack === 2 ? "bg-tab-active shadow-[inset_0_-3px_0_var(--color-ember)]" : ""
          }`}
        >
          <b className="block text-[15px]">React + Vite + Django</b>
          <small className="text-[13px] text-muted">{t.demo.tab2small}</small>
          <br />
          <span
            className={`mt-2 inline-block rounded-md px-2 py-[3px] text-[11px] font-extrabold tracking-[0.1em] ${
              stack === 2 ? "bg-ember text-white" : "bg-tab-badge text-muted"
            }`}
          >
            {t.demo.badge}
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

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-demo-foot px-6 py-4">
        <span className="text-[13px] text-muted">{t.demo.footer}</span>
        <button
          type="button"
          onClick={() => generate(stack)}
          disabled={busy}
          className="btn btn-ember"
        >
          {t.demo.button}
        </button>
      </div>
    </div>
  );
}
