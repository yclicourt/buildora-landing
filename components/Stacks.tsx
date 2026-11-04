"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Stacks() {
  const { t } = useLanguage();
  return (
    <Reveal
      id="stacks"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <p className="mb-3 text-center text-[11px] font-extrabold tracking-[0.14em] text-muted">
        {t.stacks.eyebrow}
      </p>
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.stacks.title}
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        {t.stacks.lead}
      </p>
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-3">
        {t.stacks.cards.map((card) => (
          <div
            key={card.name}
            className="rounded-[14px] border border-line bg-panel p-6 text-left"
          >
            <span
              className={`text-[11px] font-extrabold tracking-[0.1em] ${
                card.command ? "text-ember-dark" : "text-muted"
              }`}
            >
              {card.badge}
            </span>
            <h3 className="my-2 text-[19px] font-extrabold tracking-[-0.01em]">
              {card.name}
            </h3>
            <p className="text-[14px] font-bold text-muted">{card.stack}</p>
            <p className="mt-2 text-[14.5px] text-muted">{card.desc}</p>
            {card.command ? (
              <code className="mt-4 block break-all rounded-lg bg-dark px-3 py-2 font-mono text-[12.5px] leading-[1.6] text-[#EDE9E3]">
                {card.command}
              </code>
            ) : (
              <a className="btn btn-ghost mt-4" href="#reserva">
                {t.stacks.path3cta}
              </a>
            )}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-[620px] text-center text-[15px] text-muted">
        {t.stacks.footnote}
      </p>
    </Reveal>
  );
}
