import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";

export const metadata: Metadata = {
  title: "Разработка, SEO и обучение — TI Code",
  description:
    "IT-обучение, разработка и продвижение под ключ: сайты, приложения, чат-боты, SEO и занятия по программированию.",
};

export default function Home() {
  return <HomeView />;
}
