import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import About from './app/about/page';
import Experience from './app/experience/page';
import NotFound from './app/not-found';
import Home from './app/page';
import sitemap from './app/sitemap';
import { certifications, earlierRoles, education, experience, site, skills } from './content';
import { navItems, routes } from './routes';
import { renderPage } from './test/renderPage';

describe('pages', () => {
  it('renders the home page', () => {
    renderPage(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: site.role })).toBeInTheDocument();
  });

  it('renders the experience page with every role from the CV', () => {
    renderPage(<Experience />, 'experience');
    expect(screen.getByRole('heading', { level: 1, name: 'Where I’ve worked' })).toBeInTheDocument();
    for (const role of experience) {
      expect(screen.getByText(role.company)).toBeInTheDocument();
    }
    for (const role of earlierRoles) {
      expect(screen.getByText(role.title)).toBeInTheDocument();
    }
  });

  it('renders the about page with skills, education and languages', () => {
    renderPage(<About />, 'about');
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Summer Liu/ })).toBeInTheDocument();
    for (const group of skills) {
      expect(screen.getByText(group.label)).toBeInTheDocument();
    }
    for (const c of [...education, ...certifications]) {
      expect(screen.getByText(c.title)).toBeInTheDocument();
    }
    // Experience moved to its own page.
    expect(screen.queryByText('ViewSonic')).not.toBeInTheDocument();
  });

  it('renders the 404 page', () => {
    renderPage(<NotFound />, '_not-found');
    expect(screen.getByRole('heading', { level: 1, name: /wandered off/ })).toBeInTheDocument();
  });
});

describe('navigation', () => {
  it('links to each page in order', () => {
    renderPage(<Home />);
    const links = within(screen.getByRole('navigation', { name: 'Primary' })).getAllByRole('link');
    expect(links.map((l) => [l.textContent, l.getAttribute('href')])).toEqual([
      ['Home', '/'],
      ['Experience', '/experience'],
      ['About', '/about'],
    ]);
  });

  it.each(navItems.map((item) => [item.label, item.segment] as const))(
    'marks %s as current only on its own page',
    (label, segment) => {
      renderPage(<Home />, segment);
      for (const navName of ['Primary', 'Mobile']) {
        const nav = screen.getByRole('navigation', { name: navName, hidden: true });
        const current = within(nav)
          .getAllByRole('link', { hidden: true })
          .filter((l) => l.getAttribute('aria-current') === 'page');
        expect(current.map((l) => l.textContent)).toEqual([label]);
      }
    },
  );

  it('cross-links between pages', () => {
    renderPage(<Home />);
    expect(screen.getByRole('link', { name: /See my experience/ })).toHaveAttribute(
      'href',
      routes.experience,
    );
    expect(screen.getByRole('link', { name: /More about me/ })).toHaveAttribute('href', routes.about);
  });

  it('links to email and social profiles, with no CV link', () => {
    renderPage(<Home />);
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
});

describe('sitemap', () => {
  it('lists every route with its trailing-slash URL', () => {
    expect(sitemap().map((e) => e.url)).toEqual([
      'https://summerliu.github.io/portfolio/',
      'https://summerliu.github.io/portfolio/experience/',
      'https://summerliu.github.io/portfolio/about/',
    ]);
  });
});

describe('theme toggle', () => {
  it('switches theme and remembers the choice', async () => {
    renderPage(<Home />);
    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' });
    await userEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    await userEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});
