'use client';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Icons are swapped purely in CSS (the `dark:` variant reads data-theme and the OS
 * preference), so the static HTML is right on first paint and never mismatches on hydration.
 */
export default function ThemeToggle({ label }: { label: string }) {
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
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-10 cursor-pointer place-items-center rounded-full border border-line text-ink transition duration-300 ease-soft hover:rotate-20 hover:bg-sunk motion-reduce:transition-none"
    >
      {/* Spans carry the visibility: Font Awesome's own CSS sets display on the <svg> */}
      <span className="dark:hidden">
        <FontAwesomeIcon icon={faMoon} />
      </span>
      <span className="hidden dark:inline">
        <FontAwesomeIcon icon={faSun} />
      </span>
    </button>
  );
}
