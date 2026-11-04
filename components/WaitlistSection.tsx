"use client";

import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";
import { useLanguage } from "@/lib/i18n";

export default function WaitlistSection() {
  const { t } = useLanguage();
  return (
    <Reveal
      id="reserva"
      className="mx-auto max-w-[1080px] scroll-mt-20 px-6 py-[72px] max-md:py-12"
    >
      <div className="rounded-[20px] bg-ink px-8 py-14 text-center text-cream">
        <h2 className="mb-3 text-[clamp(28px,4vw,38px)] tracking-[-0.02em]">
          {t.waitlist.title}
        </h2>
        <p className="mx-auto mb-6 max-w-[560px] text-ink-soft">
          {t.waitlist.lead}
        </p>
        <WaitlistForm />
      </div>
    </Reveal>
  );
}
