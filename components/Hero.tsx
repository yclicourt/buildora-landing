"use client";

import Demo from "./Demo";
import Typewriter from "./Typewriter";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <header className="mx-auto max-w-[1080px] px-6 pb-10 pt-[72px] text-center max-md:pb-6 max-md:pt-12">
      <span className="hero-anim-badge inline-block rounded-lg border border-soft-line bg-soft px-3.5 py-[7px] text-xs font-extrabold tracking-[0.14em] text-ember-dark">
        {t.hero.badge}
      </span>
      <h1 className="hero-anim-title mx-auto my-[22px] text-[clamp(38px,6vw,60px)] leading-[1.05] tracking-[-0.03em]">
        {t.hero.title1}
        <br />
        <Typewriter items={t.hero.typewriter} />{" "}
        <em className="not-italic text-ember">{t.hero.title2}</em>
      </h1>
      <p className="hero-anim-lead mx-auto mb-7 max-w-[640px] text-[19px] text-muted">
        {t.hero.lead}
      </p>
      <div className="hero-anim-cta flex flex-wrap justify-center gap-3">
        <a className="btn btn-ember" href="#precio">
          {t.hero.cta1}
        </a>
        <a className="btn btn-ghost" href="#demo">
          {t.hero.cta2}
        </a>
      </div>
      <p className="hero-anim-note mt-4 text-sm text-muted">{t.hero.note}</p>

      <div id="demo" className="scroll-mt-20">
        <Demo />
      </div>
    </header>
  );
}
