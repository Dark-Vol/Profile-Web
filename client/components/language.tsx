"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { copy } from "@/lib/dictionary";
import type { Locale, UiCopy } from "@/lib/types";
import type { Model } from "@/utils";

type LanguageValue = {
  locale: Locale;
  t: UiCopy;
  localeModel: Model<Locale>;
};

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<LanguageValue>(
    () => ({
      locale,
      t: copy[locale],
      localeModel: { value: locale, onChange: setLocale },
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
