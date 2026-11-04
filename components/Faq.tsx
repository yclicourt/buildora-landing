"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLanguage();
  return (
    <Reveal
      id="faq"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-10 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.faq.title}
      </h2>
      <div className="mx-auto max-w-[720px]">
        {t.faq.items.map((faq) => (
          <details
            key={faq.q}
            className="mb-2.5 rounded-xl border border-line bg-panel px-[22px] py-[18px]"
          >
            <summary className="cursor-pointer text-base font-bold">
              {faq.q}
            </summary>
            <p className="mt-2 text-[15px] text-muted">{faq.a}</p>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
