"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";
import SectionIcon from "./SectionIcon";

export default function BeforeAfter() {
  const { t } = useLanguage();
  return (
    <Reveal className="mx-auto max-w-[1080px] px-6 py-[72px] max-md:py-12">
      <div className="mb-4 flex justify-center">
        <SectionIcon name="repeat" />
      </div>
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.beforeAfter.title}
      </h2>
      <p className="mx-auto mb-10 max-w-[620px] text-center text-[17px] text-muted">
        {t.beforeAfter.lead}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-[14px] border border-line bg-panel p-7">
          <h3 className="mb-3 text-lg">{t.beforeAfter.manualTitle}</h3>
          <ul>
            {t.beforeAfter.manual.map((item) => (
              <li key={item} className="mb-2 ml-[18px] text-[15px] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[14px] bg-dark p-7 text-[#FAF7F2]">
          <h3 className="mb-3 text-lg">{t.beforeAfter.withTitle}</h3>
          <ul>
            {t.beforeAfter.withBuildora.map((item) => (
              <li key={item} className="mb-2 ml-[18px] text-[15px] text-[#D6D3D1]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
