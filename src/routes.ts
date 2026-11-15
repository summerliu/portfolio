import type { Route } from 'next';
import { site } from './content';
import { defaultLocale, getDictionary, type Locale, locales } from './i18n';

/** Every page on the site, by key. Each exists once per locale. */
export const pages = ['home', 'experience', 'about'] as const;
export type Page = (typeof pages)[number];

/** Path within a locale ('' is the locale's home). Also the page's layout segment. */
const slugs: Record<Page, string> = { home: '', experience: 'experience', about: 'about' };

/** In-app href for a page in a locale: '/about' for English, '/zh-TW/about' for Chinese. */
export function href(locale: Locale, page: Page): Route {
  const parts = [locale === defaultLocale ? '' : locale, slugs[page]].filter(Boolean);
  return `/${parts.join('/')}` as Route;
}

/** Absolute public URL (with base path and trailing slash), for canonical/hreflang/sitemap. */
export function absoluteUrl(locale: Locale, page: Page): string {
  const path = href(locale, page).slice(1);
  return new URL(path ? `${path}/` : '', site.url).href;
}

/** Which page a layout segment belongs to (the header uses this to highlight and switch language). */
export function pageFromSegment(segment: string | null): Page {
  return pages.find((p) => (slugs[p] || null) === segment) ?? 'home';
}

export interface NavItem {
  page: Page;
  href: Route;
  label: string;
  /** The layout segment this item is active for (null = the locale's home). */
  segment: string | null;
}

export function navItems(locale: Locale): NavItem[] {
  const { nav } = getDictionary(locale);
  return pages.map((page) => ({
    page,
    href: href(locale, page),
    label: nav[page],
    segment: slugs[page] || null,
  }));
}

/** hreflang alternates for a page, including x-default → the default locale. */
export function languageAlternates(page: Page): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map((l) => [l, absoluteUrl(l, page)])),
    'x-default': absoluteUrl(defaultLocale, page),
  };
}
