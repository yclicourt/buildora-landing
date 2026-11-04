"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const LINKS = [
    { href: "#demo", label: t.footer.linkDemo },
    { href: "#stacks", label: t.footer.linkStacks },
    { href: "#precio", label: t.footer.linkPricing },
    { href: "#sugerencias", label: t.footer.linkSuggestions },
    { href: "#reserva", label: t.footer.linkReserve },
  ];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-[340px]">
          <a
            href="#"
            className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-[-0.02em] text-ink no-underline"
          >
            <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-ember text-[17px] text-white">
              ⌁
            </span>
            Buildora
          </a>
          <p className="mt-3 text-[14.5px] text-muted">{t.footer.tagline}</p>
          <p className="mt-4 text-[14px] text-muted">{t.footer.madeBy}</p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-col gap-2 text-[15px] md:text-right"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted no-underline hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/yclicourt"
            target="_blank"
            rel="noreferrer"
            className="text-muted no-underline hover:text-ink"
          >
            {t.footer.github} ↗
          </a>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-1 px-6 py-5 text-center text-[13.5px] text-muted sm:flex-row sm:justify-between sm:text-left">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.mit}</span>
        </div>
      </div>
    </footer>
  );
}
