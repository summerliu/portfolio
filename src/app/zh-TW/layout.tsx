import type { ReactNode } from 'react';
import SiteShell from '../../components/SiteShell';
import { layoutMetadata } from '../../i18n/metadata';

/** Root layout for Traditional Chinese, served under /zh-TW. */
export const metadata = layoutMetadata('zh-TW');
export { viewport } from '../../i18n/metadata';

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteShell locale="zh-TW">{children}</SiteShell>;
}
