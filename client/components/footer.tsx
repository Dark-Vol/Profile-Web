"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { contacts } from "@/lib/site";
import { isEmail, openMailto, useModel, type Model } from "@/utils";
import { InstagramIcon, MailIcon, PhoneIcon, TelegramIcon } from "./icons";
import { useLanguage } from "./language";
import { LanguageSwitch } from "./language-switch";
import { Logo } from "./logo";
import { Button } from "./ui/buttons";
import { EmailInput } from "./ui/inputs";

export function Footer() {
  const { t } = useLanguage();
  const email = useModel("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const year = new Date().getFullYear();

  const emailModel: Model<string> = {
    value: email.value,
    onChange: (value) => {
      email.onChange(value);
      if (error) setError("");
    },
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isEmail(email.value)) {
      setStatus("idle");
      setError(t.newsletterInvalid);
      document.getElementById("newsletter-email")?.focus();
      return;
    }
    setError("");
    setStatus("loading");
    openMailto(contacts.email, "Newsletter", email.value.trim());
    window.setTimeout(() => setStatus("success"), 300);
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-lead">{t.footerDescription}</p>
            <ul className="footer-social">
              <li>
                <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" aria-label={t.socialTelegram}>
                  <TelegramIcon />
                </a>
              </li>
              <li>
                <a href={contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label={t.socialInstagram}>
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.email}`} aria-label={t.socialEmail}>
                  <MailIcon />
                </a>
              </li>
              <li>
                <a href={`tel:${contacts.phone}`} aria-label={t.socialPhone}>
                  <PhoneIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            {t.footerColumns.map((column) => (
              <div key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={column.title + link.href + link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h2>{t.newsletterTitle}</h2>
            <p className="footer-lead">{t.newsletterText}</p>
            <form className="newsletter" onSubmit={onSubmit} noValidate>
              <EmailInput
                id="newsletter-email"
                name="email"
                label={t.newsletterPlaceholder}
                hideLabel
                placeholder={t.newsletterPlaceholder}
                model={emailModel}
                error={error}
              />
              <Button type="submit" size="sm" loading={status === "loading"}>
                {t.newsletterButton}
              </Button>
            </form>
            {status === "success" ? (
              <p className="form-success" role="status">
                {t.newsletterSuccess}
              </p>
            ) : null}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {year} TI Code. {t.rightsReserved}
            <span>{t.rights}</span>
          </p>
          <LanguageSwitch />
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </div>
      </div>
    </footer>
  );
}
