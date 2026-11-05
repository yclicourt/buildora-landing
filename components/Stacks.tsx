"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";

export default function Stacks() {
  const { t } = useLanguage();
  // El set se repite dos veces para llenar el ancho y dos mitades idénticas
  // para que el desplazamiento (-50%) del carrusel sea continuo.
  const SET = [...t.stacks.cards, ...t.stacks.cards];
  const TRACK = [...SET, ...SET];
  return (
    <Reveal
      id="stacks"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <div className="mb-4 flex justify-center">
        <SectionIcon name="layers" />
      </div>
      <p className="mb-3 text-center text-[13px] font-extrabold tracking-[0.12em] text-muted">
        {t.stacks.eyebrow}
      </p>
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.stacks.title}
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        {t.stacks.lead}
      </p>
      <div className="strip" aria-label={t.stacks.eyebrow}>
        <div className="strip-track">
          {TRACK.map((card, i) => (
            <div
              key={`${card.name}-${i}`}
              aria-hidden={i >= SET.length}
              className="mr-4 flex w-[280px] shrink-0 flex-col rounded-[14px] border border-line bg-panel p-5 text-left"
            >
              <div className="flex gap-2">
                {card.icons.map((icon) => (
                  <span
                    key={icon}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white p-1.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/icons/${icon}.svg`}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-[17px] font-extrabold tracking-[-0.01em]">
                {card.name}
              </h3>
              <span
                className={`mt-1 text-[11px] font-extrabold tracking-[0.1em] ${
                  card.available ? "text-ember-dark" : "text-muted"
                }`}
              >
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-[620px] text-center text-[15px] text-muted">
        {t.stacks.footnote}
      </p>
    </Reveal>
  );
}
