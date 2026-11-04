"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

function SunIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

export default function Nav() {
  const { lang, t, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LINKS = [
    { href: "#demo", label: t.nav.demo },
    { href: "#incluye", label: t.nav.includes },
    { href: "#precio", label: t.nav.pricing },
    { href: "#sugerencias", label: t.nav.suggestions },
    { href: "#faq", label: t.nav.faq },
  ];

  const langToggle = (
    <div
      className="flex overflow-hidden rounded-[10px] border border-line"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-label="Español"
        aria-pressed={lang === "es"}
        className={`h-10 px-3 text-[13px] font-bold ${
          lang === "es" ? "bg-ember text-white" : "text-muted hover:text-ink"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={lang === "en"}
        className={`h-10 px-3 text-[13px] font-bold ${
          lang === "en" ? "bg-ember text-white" : "text-muted hover:text-ink"
        }`}
      >
        EN
      </button>
    </div>
  );

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
      className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-panel text-ink"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  return (
    <nav
      className={`sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur-[8px] ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
        <a
          href="#"
          className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-[-0.02em] text-ink no-underline"
        >
          <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-ember text-[17px] text-white">
            ⌁
          </span>
          Buildora
        </a>
        <div className="hidden gap-7 text-[15px] text-muted md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="no-underline hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">{langToggle}</div>
          <div className="hidden sm:block">{themeToggle}</div>
          <a href="#precio" className="btn btn-ember btn-sm hidden sm:inline-flex">
            {t.nav.reserve}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-panel text-ink md:hidden"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-line bg-cream px-6 py-3 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[15px] text-muted no-underline hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 py-2">
            {langToggle}
            {themeToggle}
          </div>
          <a
            href="#precio"
            onClick={() => setOpen(false)}
            className="btn btn-ember mt-2 w-full"
          >
            {t.nav.reserve}
          </a>
        </div>
      )}
    </nav>
  );
}
