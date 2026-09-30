export type Locale = "en" | "ru";

export type NavLink = { label: string; href: string };

export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export type HomeCard = {
  title: string;
  href: string;
  links: NavLink[];
};

export type TechItem = { name: string; level: string };

export type StepItem = { title: string; text: string };

export type ServiceItem = { title: string; text: string; points: string[] };

export type ProgramItem = {
  title: string;
  text: string;
  fit: string;
  level: string;
};

export type OutcomeItem = { title: string; text: string };

export type ExpertTab = {
  id: string;
  label: string;
  icon: string;
  heading: string;
  lead: string;
  techTitle?: string;
  tech?: TechItem[];
  processTitle?: string;
  steps?: StepItem[];
  benefitsTitle?: string;
  benefits?: string[];
  servicesTitle?: string;
  services?: ServiceItem[];
  resultsTitle?: string;
  results?: string[];
  programsTitle?: string;
  programs?: ProgramItem[];
  stackTitle?: string;
  stack?: string[];
  outcomesTitle?: string;
  outcomes?: OutcomeItem[];
};

export type PageBlock = {
  title: string;
  text: string;
  points?: string[];
};

export type SitePage = {
  title: string;
  lead: string;
  blocks: PageBlock[];
};

export type UiCopy = {
  skip: string;
  logoAria: string;
  openMenu: string;
  closeMenu: string;
  language: string;
  nav: NavItem[];
  heroTitle: string;
  heroAccent: string;
  heroTurnkey: string;
  cards: HomeCard[];
  solutionsTitle: string;
  solutionsLead: string;
  tabsLabel: string;
  tabs: ExpertTab[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  footerDescription: string;
  footerColumns: { title: string; links: NavLink[] }[];
  newsletterTitle: string;
  newsletterText: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  newsletterInvalid: string;
  newsletterSuccess: string;
  rights: string;
  rightsReserved: string;
  contactTitle: string;
  contactText: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactClose: string;
  contactNameError: string;
  contactEmailError: string;
  contactMessageError: string;
  contactMessageHint: string;
  contactSuccess: string;
  navLabel: string;
  homeTitle: string;
  cardMore: string;
  contactsLabel: string;
  chatOpen: string;
  socialTelegram: string;
  socialInstagram: string;
  socialEmail: string;
  socialPhone: string;
  emptyReviews: string;
  notFoundTitle: string;
  notFoundText: string;
  notFoundAction: string;
};
