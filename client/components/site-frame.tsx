"use client";

import type { ReactNode } from "react";
import { ContactProvider, useContact } from "./contact";
import { Footer } from "./footer";
import { Header } from "./header";
import { LanguageProvider, useLanguage } from "./language";
import { LeftBar } from "./left-bar";
import { ChatButton } from "./ui/buttons";

function Frame({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  const { openContact } = useContact();

  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>
      <Header />
      <LeftBar />
      <main id="main">{children}</main>
      <Footer />
      <ChatButton label={t.chatOpen} onClick={openContact} />
    </>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ContactProvider>
        <Frame>{children}</Frame>
      </ContactProvider>
    </LanguageProvider>
  );
}
