"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";

export default function Pricing() {
  const { t } = useLanguage();
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
        <div className="rounded-[14px] border border-line bg-panel p-8 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-muted">
            {t.pricing.path1badge}
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            {t.pricing.free}
          </div>
          <p className="text-[14.5px] text-muted">{t.pricing.path1stack}</p>
          <ul className="my-[18px] list-none text-left">
            {t.pricing.path1bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <a className="btn btn-ghost" href="#reserva">
            {t.pricing.cta}
          </a>
        </div>
        <div className="rounded-[14px] border border-line bg-panel p-8 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-muted">
            {t.pricing.path2badge}
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            {t.pricing.free}
          </div>
          <p className="text-[14.5px] text-muted">{t.pricing.path2stack}</p>
          <ul className="my-[18px] list-none text-left">
            {t.pricing.path2bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <a className="btn btn-ghost" href="#reserva">
            {t.pricing.cta}
          </a>
        </div>
        <div className="rounded-[14px] border border-line bg-panel p-8 text-center">
          <span className="text-[11px] font-extrabold tracking-[0.1em] text-muted">
            {t.pricing.path3badge}
          </span>
          <div className="my-2 text-[44px] font-extrabold tracking-[-0.03em]">
            {t.pricing.free}
          </div>
          <p className="text-[14.5px] text-muted">{t.pricing.path3stack}</p>
          <ul className="my-[18px] list-none text-left">
            {t.pricing.path3bullets.map((bullet) => (
              <li
                key={bullet}
                className="border-t border-line py-1.5 text-[14.5px] text-muted first:border-t-0"
              >
                {bullet}
              </li>
            ))}
          </ul>
          <a className="btn btn-ghost" href="#reserva">
            {t.pricing.cta}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[1080px] rounded-xl border border-soft-line bg-soft px-6 py-5 text-[15px]">
        <b className="text-ember-dark">{t.pricing.honestyLabel}</b>{" "}
        {t.pricing.honestyText}
      </div>
    </Reveal>
  );
}
