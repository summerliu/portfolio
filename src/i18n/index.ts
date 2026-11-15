import type { DateStamp, Period } from '../content';
import type { Locale } from './config';
import { en } from './en';
import type { Dictionary } from './types';
import { zhTW } from './zh-TW';

export * from './config';
export type { Dictionary, RichText } from './types';

const dictionaries: Record<Locale, Dictionary> = { en, 'zh-TW': zhTW };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/** 'Aug 2022' / '2022年8月', or just the year for year-precision stamps. */
function formatStamp(locale: Locale, stamp: DateStamp): string {
  const [year, month] = stamp.split('-').map(Number);
  if (year === undefined || Number.isNaN(year)) throw new Error(`Bad date stamp: ${stamp}`);
  if (month === undefined) return String(year);
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', timeZone: 'UTC' }).format(
    Date.UTC(year, month - 1),
  );
}

export const formatPeriod = (locale: Locale, { start, end }: Period): string =>
  `${formatStamp(locale, start)} – ${formatStamp(locale, end)}`;
