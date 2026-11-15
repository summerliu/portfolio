import { getDictionary, type Locale, locales } from '../i18n';
import { href, navItems, type Page, pages } from '../routes';
import type { SiteHeaderProps } from './SiteHeader';

/**
 * Everything the (client) header needs for a locale, as plain serialisable props,
 * so the dictionaries themselves never ship to the browser.
 */
export function headerProps(locale: Locale): SiteHeaderProps {
  const t = getDictionary(locale);
  const other = locales.find((l) => l !== locale) ?? locale;
  const otherT = getDictionary(other);
  return {
    homeHref: href(locale, 'home'),
    navItems: navItems(locale),
    labels: t.nav,
    language: {
      lang: other,
      label: otherT.meta.languageName,
      title: otherT.meta.switchTo,
      hrefs: Object.fromEntries(pages.map((p) => [p, href(other, p)])) as Record<
        Page,
        ReturnType<typeof href>
      >,
    },
  };
}
