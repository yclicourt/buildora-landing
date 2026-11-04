"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dicts, type Dict, type Lang } from "@/lib/dict";

const LANG_KEY = "buildora-lang";

type LanguageCtx = {
  lang: Lang;
  t: Dict;
  setLang: (lang: Lang) => void;
};

const Ctx = createContext<LanguageCtx>({
  lang: "es",
  t: dicts.es,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_KEY);
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {
      // localStorage no disponible: se queda el default es.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANG_KEY, next);
    } catch {
      // Sin persistencia, el cambio aplica solo a la sesión.
    }
  };

  return (
    <Ctx.Provider value={{ lang, t: dicts[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage(): LanguageCtx {
  return useContext(Ctx);
}
