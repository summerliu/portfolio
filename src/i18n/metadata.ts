import type { Metadata, Viewport } from 'next';
import { basePath } from '../../next.config';
import { site } from '../content';
import { absoluteUrl, languageAlternates, type Page } from '../routes';
import type { Locale } from './config';
import { getDictionary } from './index';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf9f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1c1915' },
  ],
};

/** Metadata shared by every page in a locale (set by that locale's root layout). */
export function layoutMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const title = `${site.name} — ${t.site.role}`;
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s — ${site.name}` },
    description: t.site.summary,
    icons: { icon: `${basePath}/favicon.ico`, apple: `${basePath}/logo192.png` },
    openGraph: { title, description: t.site.summary, type: 'website', locale: t.meta.ogLocale },
  };
}

/** Per-page title, description, canonical URL and hreflang alternates. */
export function pageMetadata(locale: Locale, page: Page): Metadata {
  const t = getDictionary(locale);
  const titles: Record<Page, string | undefined> = {
    home: undefined, // falls back to the layout's default title
    experience: t.nav.experience,
    about: t.nav.about,
  };
  const descriptions: Record<Page, string> = {
    home: t.site.summary,
    experience: t.experience.metaDescription,
    about: t.about.metaDescription,
  };
  const url = absoluteUrl(locale, page);
  const pageTitle = titles[page];
  return {
    ...(pageTitle && { title: pageTitle }),
    description: descriptions[page],
    alternates: { canonical: url, languages: languageAlternates(page) },
    // Next replaces (doesn't merge) the layout's openGraph, so this one is complete.
    openGraph: {
      title: pageTitle ? `${pageTitle} — ${site.name}` : `${site.name} — ${t.site.role}`,
      description: descriptions[page],
      url,
      type: 'website',
      locale: t.meta.ogLocale,
    },
  };
}
