"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";

export default function Included() {
  const { t } = useLanguage();
  return (
    <Reveal
      id="incluye"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <div className="mb-4 flex justify-center">
        <SectionIcon name="check" />
      </div>
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.included.title}
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        {t.included.lead}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {t.included.items.map((item) => (
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
