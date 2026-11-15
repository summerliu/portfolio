import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import sitemap from './app/sitemap';
import { certifications, earlierRoles, education, roles, site, skills } from './content';
import { formatPeriod, getDictionary, type Locale, locales } from './i18n';
import { navItems } from './routes';
import { renderPage } from './test/renderPage';
import AboutView from './views/AboutView';
import ExperienceView from './views/ExperienceView';
import HomeView from './views/HomeView';

describe.each(locales)('pages (%s)', (locale: Locale) => {
  const t = getDictionary(locale);

  it('renders the home page', () => {
    renderPage(<HomeView locale={locale} />, { locale });
    expect(screen.getByRole('heading', { level: 1, name: t.site.role })).toBeInTheDocument();
  });

  it('renders every role from the CV, with localised dates', () => {
    renderPage(<ExperienceView locale={locale} />, { locale, segment: 'experience' });
    expect(screen.getByRole('heading', { level: 1, name: t.experience.title })).toBeInTheDocument();
    for (const role of roles) {
      expect(screen.getByText(role.company)).toBeInTheDocument();
      expect(
        screen.getAllByRole('heading', { level: 2, name: t.experience.roles[role.id].title }).length,
      ).toBeGreaterThan(0);
      expect(screen.getByText(formatPeriod(locale, role.period))).toBeInTheDocument();
    }
    for (const role of earlierRoles) {
      expect(screen.getByText(t.experience.earlierRoles[role.id])).toBeInTheDocument();
    }
  });

  it('renders skills, education and languages on the about page', () => {
    renderPage(<AboutView locale={locale} />, { locale, segment: 'about' });
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: t.about.portraitAlt })).toBeInTheDocument();
    for (const group of skills) {
      expect(screen.getByText(t.about.skillGroups[group.id])).toBeInTheDocument();
    }
    for (const e of education) {
      expect(screen.getByText(t.about.education[e.id].school)).toBeInTheDocument();
    }
    for (const c of certifications) {
      expect(screen.getByText(t.about.certifications[c.id].title)).toBeInTheDocument();
    }
  });

  it.each(navItems(locale).map((item) => [item.label, item.segment] as const))(
    'marks %s as current only on its own page',
    (label, segment) => {
      renderPage(<HomeView locale={locale} />, { locale, segment });
      for (const navName of [t.nav.primary, t.nav.mobile]) {
        const nav = screen.getByRole('navigation', { name: navName, hidden: true });
        const current = within(nav)
          .getAllByRole('link', { hidden: true })
          .filter((l) => l.getAttribute('aria-current') === 'page');
        expect(current.map((l) => l.textContent)).toEqual([label]);
      }
    },
  );
});

describe('localised URLs', () => {
  it('keeps English unprefixed and prefixes Chinese', () => {
    expect(navItems('en').map((i) => i.href)).toEqual(['/', '/experience', '/about']);
    expect(navItems('zh-TW').map((i) => i.href)).toEqual(['/zh-TW', '/zh-TW/experience', '/zh-TW/about']);
  });

  it('formats dates per locale', () => {
    expect(formatPeriod('en', roles[0].period)).toBe('Aug 2022 – Dec 2025');
    expect(formatPeriod('zh-TW', roles[0].period)).toBe('2022年8月 – 2025年12月');
    expect(formatPeriod('zh-TW', education[0].period)).toBe('2011 – 2015');
  });
});

describe('language switcher', () => {
  it.each([
    ['en', null, '/zh-TW', '中文'],
    ['en', 'experience', '/zh-TW/experience', '中文'],
    ['zh-TW', 'about', '/about', 'English'],
    ['zh-TW', null, '/', 'English'],
  ] as const)('on %s/%s links to %s', (locale, segment, target, label) => {
    renderPage(<HomeView locale={locale} />, { locale, segment });
    const link = screen.getByRole('link', {
      name: getDictionary(locale === 'en' ? 'zh-TW' : 'en').meta.switchTo,
    });
    expect(link).toHaveAttribute('href', target);
    expect(link).toHaveTextContent(label);
    expect(link).toHaveAttribute('hreflang', locale === 'en' ? 'zh-TW' : 'en');
  });
});

describe('links', () => {
  it('links to email and social profiles, with no CV link', () => {
    renderPage(<HomeView locale="en" />);
    expect(screen.getByRole('link', { name: new RegExp(site.email) })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    );
    expect(screen.getByRole('link', { name: 'Say hello' })).toHaveAttribute('href', `mailto:${site.email}`);
    expect(screen.queryByRole('link', { name: /\bCV\b/ })).not.toBeInTheDocument();
    for (const name of ['LinkedIn', 'GitHub', 'Medium']) {
      expect(screen.getAllByRole('link', { name }).length).toBeGreaterThan(0);
    }
  });

  it('cross-links within the same locale', () => {
    renderPage(<HomeView locale="zh-TW" />, { locale: 'zh-TW' });
    const t = getDictionary('zh-TW');
    expect(screen.getByRole('link', { name: new RegExp(t.home.seeExperience) })).toHaveAttribute(
      'href',
      '/zh-TW/experience',
    );
    expect(screen.getByRole('link', { name: new RegExp(t.home.moreAboutMe) })).toHaveAttribute(
      'href',
      '/zh-TW/about',
    );
  });
});

describe('sitemap', () => {
  it('lists every page in every language with hreflang alternates', () => {
    const entries = sitemap();
    expect(entries.map((e) => e.url)).toEqual([
      'https://summerliu.github.io/portfolio/',
      'https://summerliu.github.io/portfolio/experience/',
      'https://summerliu.github.io/portfolio/about/',
      'https://summerliu.github.io/portfolio/zh-TW/',
      'https://summerliu.github.io/portfolio/zh-TW/experience/',
      'https://summerliu.github.io/portfolio/zh-TW/about/',
    ]);
    expect(entries[1]?.alternates?.languages).toEqual({
      en: 'https://summerliu.github.io/portfolio/experience/',
      'zh-TW': 'https://summerliu.github.io/portfolio/zh-TW/experience/',
      'x-default': 'https://summerliu.github.io/portfolio/experience/',
    });
  });
});

describe('theme toggle', () => {
  it('switches theme and remembers the choice', async () => {
    renderPage(<HomeView locale="en" />);
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' });
    await userEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    await userEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});
