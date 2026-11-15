'use client';

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRef } from 'react';
import { site, socialLinks } from '../content';
import { navItems, routes } from '../routes';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';

const MENU_ID = 'site-menu';

const navLink =
  'rounded-full px-3.5 py-1.5 text-fluid-sm font-medium text-muted no-underline transition-colors duration-200 ease-soft hover:bg-sunk hover:text-ink aria-[current=page]:bg-sage-soft aria-[current=page]:text-ink';

const roundButton =
  'grid size-10 cursor-pointer place-items-center rounded-full bg-ink text-[1.05rem] text-paper';

export default function SiteHeader() {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => menuRef.current?.hidePopover();

  return (
    <header className="sticky top-0 z-10 border-b border-line/60 bg-paper/80 backdrop-blur-md backdrop-saturate-150">
      <div className="wrap flex h-header items-center gap-6">
        <Link
          href={routes.home}
          className="mr-auto font-serif text-fluid-lg font-semibold tracking-tight no-underline"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} className={navLink} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            popoverTarget={MENU_ID}
            aria-label="Open menu"
            className={`${roundButton} md:hidden`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu: native Popover API, animated in with @starting-style */}
      <div
        id={MENU_ID}
        popover="auto"
        ref={menuRef}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col justify-center gap-12 border-0 bg-paper p-gutter text-ink opacity-0 -translate-y-4 transition-[opacity,translate,display,overlay] duration-250 ease-soft transition-discrete open:flex open:translate-y-0 open:opacity-100 starting:open:-translate-y-4 starting:open:opacity-0 motion-reduce:transition-none"
      >
        <button
          type="button"
          popoverTarget={MENU_ID}
          popoverTargetAction="hide"
          aria-label="Close menu"
          className={`${roundButton} absolute top-[calc((var(--spacing-header)-2.5rem)/2)] right-gutter`}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <nav aria-label="Mobile" className="grid gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              onClick={closeMenu}
              className="w-fit font-serif text-fluid-3xl no-underline aria-[current=page]:italic aria-[current=page]:text-sage"
            />
          ))}
        </nav>

        <ul className="flex gap-5 text-2xl">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-muted hover:text-ink"
              >
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
