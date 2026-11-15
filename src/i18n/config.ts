export const locales = ['en', 'zh-TW'] as const;
export type Locale = (typeof locales)[number];

/** The default locale is served without a URL prefix (/, /about); others are prefixed (/zh-TW/about). */
export const defaultLocale: Locale = 'en';

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);
