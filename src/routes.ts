import type { Route } from 'next';

/**
 * Every page on the site. `typedRoutes` (next.config.ts) makes Next check each
 * <Link href> against the real app/ directory at typecheck time.
 */
export const routes = {
  home: '/',
  experience: '/experience',
  about: '/about',
} as const satisfies Record<string, Route>;

export interface NavItem {
  href: Route;
  label: string;
  /** The top-level layout segment this item is active for (null = home). */
  segment: string | null;
}

export const navItems: readonly NavItem[] = [
  { href: routes.home, label: 'Home', segment: null },
  { href: routes.experience, label: 'Experience', segment: 'experience' },
  { href: routes.about, label: 'About', segment: 'about' },
];
