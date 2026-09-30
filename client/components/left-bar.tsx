"use client";

import { contacts } from "@/lib/site";
import { useLanguage } from "./language";
import { InstagramIcon, MailIcon, PhoneIcon, TelegramIcon } from "./icons";

const items = [
  { key: "socialTelegram" as const, href: contacts.telegram, external: true, icon: TelegramIcon },
  { key: "socialInstagram" as const, href: contacts.instagram, external: true, icon: InstagramIcon },
  { key: "socialEmail" as const, href: `mailto:${contacts.email}`, external: false, icon: MailIcon },
  { key: "socialPhone" as const, href: `tel:${contacts.phone}`, external: false, icon: PhoneIcon },
];

export function LeftBar() {
  const { t } = useLanguage();
  return (
    <aside className="rail" aria-label={t.contactsLabel}>
      <ul>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.key}>
              <a
                href={item.href}
                aria-label={t[item.key]}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
