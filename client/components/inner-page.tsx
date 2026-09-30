"use client";

import Link from "next/link";
import { pages } from "@/lib/dictionary";
import { useDocumentTitle } from "@/utils";
import { useContact } from "./contact";
import { useLanguage } from "./language";
import { Button } from "./ui/buttons";

const articleLinks: Record<string, string> = {
  "Python vs JavaScript": "/blog/python-vs-javascript",
  "Python или JavaScript": "/blog/python-vs-javascript",
};

export function InnerPage({ slug }: { slug: string }) {
  const { locale, t } = useLanguage();
  const { openContact } = useContact();
  const page = pages[locale][slug];

  useDocumentTitle(page ? `${page.title} — TI Code` : undefined);

  if (!page) return null;

  return (
    <article className="page">
      <header className="page-head">
        <p className="kicker">TI Code</p>
        <h1>{page.title}</h1>
        <p>{page.lead}</p>
      </header>
      {page.blocks.length === 0 ? (
        <div className="empty">
          <p>{t.emptyReviews}</p>
          <Button onClick={openContact}>{t.ctaButton}</Button>
        </div>
      ) : (
        <div className="page-grid">
          {page.blocks.map((block) => {
            const articleHref = slug === "blog" ? articleLinks[block.title] : undefined;
            const body = (
              <>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
                {block.points ? (
                  <ul>
                    {block.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </>
            );
            return articleHref ? (
              <Link key={block.title} href={articleHref} className="page-card is-link">
                {body}
              </Link>
            ) : (
              <section key={block.title} className="page-card">
                {body}
              </section>
            );
          })}
        </div>
      )}
      <div className="cta">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaText}</p>
        <Button onClick={openContact}>{t.ctaButton}</Button>
      </div>
    </article>
  );
}
