"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  const PRODUCT_LINKS = [
    { href: "#demo", label: t.footer.linkDemo },
    { href: "#stacks", label: t.footer.linkStacks },
    { href: "#precio", label: t.footer.linkPricing },
    { href: "#sugerencias", label: t.footer.linkSuggestions },
    { href: "#reserva", label: t.footer.linkReserve },
  ];
  const STACKS = [t.footer.stack1, t.footer.stack2, t.footer.stack3];
  return (
    <footer className="border-t border-white/10 bg-dark">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-[340px]">
          <a
            href="#"
            className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-[-0.02em] text-[#FAF7F2] no-underline"
          >
            <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-ember text-[17px] text-white">
              ⌁
            </span>
            Buildora
          </a>
          <p className="mt-3 text-[14.5px] text-[#D6D3D1]">
            {t.footer.tagline}
          </p>
          <p className="mt-4 text-[14px] text-[#A8A29E]">{t.footer.madeBy}</p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://github.com/yclicourt"
              target="_blank"
              rel="noreferrer"
              aria-label={t.footer.github}
              className="grid h-10 w-10 place-items-center rounded-full bg-white transition hover:opacity-85"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/github.svg" alt="" className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yoancarlos"
              target="_blank"
              rel="noreferrer"
              aria-label={t.footer.linkedin}
              className="grid h-10 w-10 place-items-center rounded-full bg-white transition hover:opacity-85"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/linkedin.svg" alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>
        <nav aria-label="Stacks">
          <h3 className="mb-4 text-[12px] font-extrabold tracking-[0.14em] text-[#FAF7F2]">
            {t.footer.colStacks}
          </h3>
          <ul className="flex flex-col gap-2.5 text-[15px] text-[#D6D3D1]">
            {STACKS.map((stack) => (
              <li key={stack}>{stack}</li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Product">
          <h3 className="mb-4 text-[12px] font-extrabold tracking-[0.14em] text-[#FAF7F2]">
            {t.footer.colProduct}
          </h3>
          <ul className="flex flex-col gap-2.5 text-[15px]">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#D6D3D1] no-underline hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-1 px-6 py-5 text-center text-[13.5px] text-[#A8A29E] sm:flex-row sm:justify-between sm:text-left">
          <span>{t.footer.copyright}</span>
          <span>{t.footer.mit}</span>
        </div>
      </div>
    </footer>
  );
}
