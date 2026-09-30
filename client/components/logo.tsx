"use client";

import Link from "next/link";
import { useLanguage } from "./language";

export function Logo({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <Link href="/" className={`logo ${className}`.trim()} aria-label={t.logoAria}>
      <span className="logo-ti">TI</span>
      <span className="logo-code">CODE</span>
    </Link>
  );
}
