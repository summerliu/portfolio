'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { type Page, pageFromSegment } from '../routes';

export interface LanguageSwitch {
  /** BCP 47 tag of the target language. */
  lang: string;
  /** Target language's name, in that language (e.g. 中文). */
  label: string;
  /** Accessible description, in the target language (e.g. 閱讀中文版). */
  title: string;
  /** The same page in the target language. */
  hrefs: Record<Page, Route>;
}

/** Links to the current page in the other language. */
export default function LanguageSwitcher({
  target,
  className,
}: {
  target: LanguageSwitch;
  className?: string;
}) {
  const page = pageFromSegment(useSelectedLayoutSegment());
  return (
    <Link
      href={target.hrefs[page]}
      hrefLang={target.lang}
      lang={target.lang}
      title={target.title}
      aria-label={target.title}
      className={className}
    >
      {target.label}
    </Link>
  );
}
