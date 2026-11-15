import type { ReactNode } from 'react';
import SiteShell from '../../components/SiteShell';
import { layoutMetadata } from '../../i18n/metadata';

/** Root layout for English, served without a URL prefix (the (en) group adds no path segment). */
export const metadata = layoutMetadata('en');
export { viewport } from '../../i18n/metadata';

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
