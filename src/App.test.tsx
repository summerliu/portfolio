import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import About from './app/about/page';
import NotFound from './app/not-found';
import Home from './app/page';
import { certifications, education, experience, site, skills } from './content';
import { renderPage } from './test/renderPage';

describe('pages', () => {
  it('renders the home page', () => {
    renderPage(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: site.role })).toBeInTheDocument();
  });

  it('renders the about page', () => {
    renderPage(<About />, '/about/');
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Summer Liu/ })).toBeInTheDocument();
  });

  it('lists every role, skill group and credential from the CV', () => {
    renderPage(<About />, '/about/');
    for (const role of experience) {
      expect(screen.getAllByText(role.company).length).toBeGreaterThan(0);
    }
    for (const group of skills) {
      expect(screen.getByText(group.label)).toBeInTheDocument();
    }
    for (const c of [...education, ...certifications]) {
      expect(screen.getByText(c.title)).toBeInTheDocument();
    }
    expect(screen.getByRole('heading', { level: 2, name: 'Where I’ve worked' })).toBeInTheDocument();
  });

  it('renders the 404 page', () => {
    renderPage(<NotFound />, '/nope/');
    expect(screen.getByRole('heading', { level: 1, name: /wandered off/ })).toBeInTheDocument();
  });
});

describe('navigation', () => {
  it('links to each page', () => {
    renderPage(<Home />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
  });

  it('marks the current page', () => {
    renderPage(<About />, '/about/');
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
    expect(within(nav).getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
  });

  it('links to email and social profiles, with no CV link', () => {
    renderPage(<Home />);
    expect(screen.getByRole('link', { name: new RegExp(site.email) })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    );
    expect(screen.getByRole('link', { name: 'Say hello' })).toHaveAttribute('href', `mailto:${site.email}`);
    expect(screen.queryByRole('link', { name: /\bCV\b/ })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /See my experience/ })).toHaveAttribute(
      'href',
      '/about#experience',
    );
    for (const name of ['LinkedIn', 'GitHub', 'Medium']) {
      expect(screen.getAllByRole('link', { name }).length).toBeGreaterThan(0);
    }
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
