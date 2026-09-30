"use client";

import Link from "next/link";
import { useId, type KeyboardEvent } from "react";
import type { ExpertTab } from "@/lib/types";
import { bindOption, nextRovingIndex, useDocumentTitle, useModel } from "@/utils";
import { useContact } from "./contact";
import { useLanguage } from "./language";
import { Button, TabButton } from "./ui/buttons";

export function HomeView() {
  const { t } = useLanguage();
  const { openContact } = useContact();
  const baseId = useId();
  const activeTab = useModel(t.tabs[0].id);
  const tab = t.tabs.find((item) => item.id === activeTab.value) ?? t.tabs[0];

  useDocumentTitle(t.homeTitle);

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = nextRovingIndex(event.key, index, t.tabs.length);
    if (next === null) return;
    event.preventDefault();
    const id = t.tabs[next].id;
    activeTab.onChange(id);
    document.getElementById(tabId(id))?.focus();
  }

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>
            {t.heroTitle}
            <br />
            <span className="accent">{t.heroAccent}</span> <span className="cyan">{t.heroTurnkey}</span>
          </h1>
          <div className="cards">
            {t.cards.map((card, index) => (
              <article key={card.title} className="card" style={{ animationDelay: `${0.15 + index * 0.12}s` }}>
                <h2>{card.title}</h2>
                <ul>
                  {card.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
                <Link className="card-more" href={card.href}>
                  {t.cardMore}
                  <span className="sr-only"> ({card.title})</span>
                  <span className="arrow" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="expert" aria-labelledby={`${baseId}-solutions`}>
        <div className="expert-inner">
          <header className="expert-head">
            <h2 id={`${baseId}-solutions`}>{t.solutionsTitle}</h2>
            <p>{t.solutionsLead}</p>
          </header>
          <div className="tabs" role="tablist" aria-label={t.tabsLabel}>
            {t.tabs.map((item, index) => (
              <TabButton
                key={item.id}
                id={tabId(item.id)}
                controls={panelId(item.id)}
                model={bindOption(activeTab, item.id)}
                icon={item.icon}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                {item.label}
              </TabButton>
            ))}
          </div>
          <TabPanel tab={tab} labelledBy={tabId(tab.id)} id={panelId(tab.id)} />
          <div className="cta">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <Button onClick={openContact}>{t.ctaButton}</Button>
          </div>
        </div>
      </section>
    </>
  );
}

function TabPanel({ tab, id, labelledBy }: { tab: ExpertTab; id: string; labelledBy: string }) {
  return (
    <div role="tabpanel" id={id} aria-labelledby={labelledBy} className="panel" tabIndex={0}>
      <h3>{tab.heading}</h3>
      <p className="lead">{tab.lead}</p>

      {tab.tech && tab.techTitle ? (
        <div className="block">
          <h4>{tab.techTitle}</h4>
          <ul className="tech-grid">
            {tab.tech.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.level}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {tab.steps && tab.processTitle ? (
        <div className="block">
          <h4>{tab.processTitle}</h4>
          <ol className="steps">
            {tab.steps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h5>{step.title}</h5>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {tab.benefits && tab.benefitsTitle ? (
        <div className="block">
          <h4>{tab.benefitsTitle}</h4>
          <ul className="checks">
            {tab.benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {tab.services && tab.servicesTitle ? (
        <div className="block">
          <h4>{tab.servicesTitle}</h4>
          <div className="service-grid">
            {tab.services.map((service) => (
              <article key={service.title}>
                <h5>{service.title}</h5>
                <p>{service.text}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {tab.results && tab.resultsTitle ? (
        <div className="block">
          <h4>{tab.resultsTitle}</h4>
          <ul className="results">
            {tab.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {tab.programs && tab.programsTitle ? (
        <div className="block">
          <h4>{tab.programsTitle}</h4>
          <div className="service-grid">
            {tab.programs.map((program) => (
              <article key={program.title}>
                <h5>{program.title}</h5>
                <p>{program.text}</p>
                <p className="meta">
                  {program.fit}
                  <span>{program.level}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {tab.stack && tab.stackTitle ? (
        <div className="block">
          <h4>{tab.stackTitle}</h4>
          <ul className="badges">
            {tab.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {tab.outcomes && tab.outcomesTitle ? (
        <div className="block">
          <h4>{tab.outcomesTitle}</h4>
          <ul className="checks">
            {tab.outcomes.map((item) => (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
