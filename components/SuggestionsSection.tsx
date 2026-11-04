"use client";

import Reveal from "./Reveal";
import SuggestionsForm from "./SuggestionsForm";
import { useLanguage } from "@/lib/i18n";

export default function SuggestionsSection() {
  const { t } = useLanguage();
  return (
    <Reveal
      id="sugerencias"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <h2 className="mx-auto mb-3.5 max-w-[680px] text-center text-[clamp(28px,4vw,38px)] leading-[1.15] tracking-[-0.02em]">
        {t.suggestions.title}
      </h2>
      <p className="mx-auto mb-8 max-w-[620px] text-center text-[17px] text-muted">
        {t.suggestions.lead}
      </p>
      <SuggestionsForm />
    </Reveal>
  );
}
