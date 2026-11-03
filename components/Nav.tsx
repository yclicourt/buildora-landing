"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#demo", label: "Demo" },
  { href: "#incluye", label: "Qué incluye" },
  { href: "#precio", label: "Acceso anticipado" },
  { href: "#faq", label: "Preguntas" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#precio" className="btn btn-ember btn-sm hidden sm:inline-flex">
            Reserva tu acceso
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-line bg-white text-ink md:hidden"
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
          <a
            href="#precio"
            onClick={() => setOpen(false)}
            className="btn btn-ember mt-2 w-full"
          >
            Reserva tu acceso
          </a>
        </div>
      )}
    </nav>
  );
}
