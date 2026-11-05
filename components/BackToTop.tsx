"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

// Botón flotante para volver arriba: aparece al bajar 400px, con scroll
// suave (o instantáneo con prefers-reduced-motion).
export default function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label={t.common.backToTop}
      title={t.common.backToTop}
      className={`fixed right-6 bottom-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-line bg-chip text-[#FAF7F2] shadow-lg transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-ember ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
