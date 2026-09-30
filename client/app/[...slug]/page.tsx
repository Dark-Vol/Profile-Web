import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPage } from "@/components/inner-page";
import { pages, pageSlugs } from "@/lib/dictionary";

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return pageSlugs.map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.ru[slug.join("/")];
  if (!page) return {};
  return { title: page.title, description: page.lead };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const key = slug.join("/");
  if (!pages.ru[key]) notFound();
  return <InnerPage slug={key} />;
}
