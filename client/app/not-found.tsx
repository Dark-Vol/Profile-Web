"use client";

import { Button } from "@/components/ui/buttons";
import { useLanguage } from "@/components/language";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <article className="page">
      <header className="page-head">
        <p className="kicker">404</p>
        <h1>{t.notFoundTitle}</h1>
        <p>{t.notFoundText}</p>
        <Button href="/">{t.notFoundAction}</Button>
      </header>
    </article>
  );
}
