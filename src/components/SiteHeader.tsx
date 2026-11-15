'use client';

import { faArrowUpRightFromSquare, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { navItems, site, socialLinks } from '../content';
import styles from './SiteHeader.module.css';
import ThemeToggle from './ThemeToggle';

const MENU_ID = 'site-menu';

export default function SiteHeader() {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => menuRef.current?.hidePopover();
  const pathname = usePathname();
  // trailingSlash: true means the pathname may be '/about/' — compare without it.
  const trim = (p: string) => p.replace(/(.)\/$/, '$1');
  const current = (to: string) => (trim(pathname) === trim(to) ? ('page' as const) : undefined);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand}>
          {site.name}
        </Link>

        <nav aria-label="Primary" className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link key={item.to} href={item.to} aria-current={current(item.to)} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          <a href={site.cvUrl} target="_blank" rel="noreferrer" className={styles.navLink}>
            CV <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.external} />
          </a>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button type="button" className={styles.menuButton} popoverTarget={MENU_ID} aria-label="Open menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div id={MENU_ID} popover="auto" ref={menuRef} className={styles.menu}>
        <button
          type="button"
          className={styles.closeButton}
          popoverTarget={MENU_ID}
          popoverTargetAction="hide"
          aria-label="Close menu"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <nav aria-label="Mobile" className={styles.menuNav}>
          {navItems.map((item) => (
            <Link key={item.to} href={item.to} aria-current={current(item.to)} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <a href={site.cvUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            CV
          </a>
        </nav>

        <ul className={styles.menuSocial}>
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
