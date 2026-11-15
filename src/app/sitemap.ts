import type { MetadataRoute } from 'next';
import { locales } from '../i18n';
import { absoluteUrl, languageAlternates, pages } from '../routes';

export const dynamic = 'force-static';

/** Every page in every language, each listing its translations (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: absoluteUrl(locale, page),
      changeFrequency: 'monthly' as const,
      priority: page === 'home' ? 1 : 0.8,
      alternates: { languages: languageAlternates(page) },
    })),
  );
}
