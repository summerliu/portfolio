'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Icons are swapped purely in CSS (from data-theme / prefers-color-scheme), so the
 * statically rendered HTML is correct on first paint and never mismatches on hydration.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage may be unavailable (private mode); the choice still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <FontAwesomeIcon icon={faMoon} className={styles.moon} />
      <FontAwesomeIcon icon={faSun} className={styles.sun} />
    </button>
  );
}
