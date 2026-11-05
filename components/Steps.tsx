"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";

export default function Steps() {
  const { t } = useLanguage();
  return (
    <Reveal className="mx-auto max-w-[1080px] px-6 py-[72px] max-md:py-12">
      <div className="mb-4 flex justify-center">
        <SectionIcon name="list" />
      </div>
      <h2 className="mx-auto mb-10 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.steps.title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {t.steps.items.map((step) => (
          <div
            key={step.num}
            className="step rounded-[14px] border border-line bg-panel p-6"
          >
            <span className="text-[13px] font-extrabold tracking-[0.12em] text-ember-dark">
              {step.num}
            </span>
            <h3 className="my-2.5 text-[17px]">{step.title}</h3>
            <p className="text-[14.5px] text-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
