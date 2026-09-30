import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-frame";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Разработка, SEO и обучение — TI Code",
    template: "%s — TI Code",
  },
  description:
    "TI Code: разработка сайтов, мобильных приложений и чат-ботов, SEO-продвижение и обучение программированию.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
