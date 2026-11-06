"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";

const TECH_LABELS: Record<string, string> = {
  nextjs: "Next.js",
  nestjs: "NestJS",
  prisma: "Prisma",
  postgresql: "PostgreSQL",
  redis: "Redis",
  react: "React",
  vitejs: "Vite",
  django: "Django",
  angular: "Angular",
  fastapi: "FastAPI",
};

export default function Pricing() {
  const { t } = useLanguage();
  const paths = [
    {
      badge: t.pricing.path1badge,
      bullets: t.pricing.path1bullets,
      icons: t.stacks.cards[0].icons,
    },
    {
      badge: t.pricing.path2badge,
      bullets: t.pricing.path2bullets,
      icons: t.stacks.cards[1].icons,
    },
    {
      badge: t.pricing.path3badge,
      bullets: t.pricing.path3bullets,
      icons: t.stacks.cards[2].icons,
    },
  ];
  return (
    <Reveal
      id="precio"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <div className="mb-4 flex justify-center">
        <SectionIcon name="tag" />
      </div>
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.pricing.title}
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        {t.pricing.lead}
      </p>
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-4 md:grid-cols-3">
        {paths.map((path) => {
          // Carrusel como el de Stacks: el set se repite dos veces para
          // llenar el ancho y dos mitades idénticas para que el
          // desplazamiento (-50%) sea continuo.
          const SET = [...path.icons, ...path.icons];
          const TRACK = [...SET, ...SET];
          return (
            <div
              key={path.badge}
              className="rounded-[14px] border border-line bg-panel p-8 text-center"
            >
              <span className="text-[11px] font-extrabold tracking-[0.1em] text-muted">
                {path.badge}
              </span>
              <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
                {t.pricing.free}
              </div>
              <div className="strip pb-1">
                <div className="strip-track">
                  {TRACK.map((icon, i) => (
                    <span
                      key={`${icon}-${i}`}
                      aria-hidden={i >= SET.length}
                      className="mr-2 flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[12.5px] font-semibold"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/icons/${icon}.svg`}
                        alt=""
                        className="h-4 w-4 object-contain"
                      />
                      {TECH_LABELS[icon] ?? icon}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="my-[18px] list-none text-left">
                {path.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 py-1.5 text-[14.5px] text-muted"
                  >
                    <span aria-hidden className="font-extrabold text-ember-dark">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a className="btn btn-ghost" href="#reserva">
                {t.pricing.cta}
              </a>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-8 max-w-[1080px] rounded-xl border border-soft-line bg-soft px-6 py-5 text-[15px]">
        <b className="text-ember-dark">{t.pricing.honestyLabel}</b>{" "}
        {t.pricing.honestyText}
      </div>
    </Reveal>
  );
}
