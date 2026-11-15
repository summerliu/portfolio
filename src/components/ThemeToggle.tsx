import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';

const media = () => window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'light' || explicit === 'dark') return explicit;
  return media().matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  // Follow OS changes until the visitor makes an explicit choice.
  useEffect(() => {
    const mq = media();
    const onChange = () => {
      if (!document.documentElement.dataset.theme) setTheme(mq.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage may be unavailable (private mode); the choice still applies for this visit.
    }
    setTheme(next);
  };

  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label}>
      <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
    </button>
  );
}
