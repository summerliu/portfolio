import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import About from './app/about/page';
import NotFound from './app/not-found';
import Home from './app/page';
import { site } from './content';
import { renderPage } from './test/renderPage';

describe('pages', () => {
  it('renders the home page', () => {
    renderPage(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: 'Web Frontend Developer' })).toBeInTheDocument();
  });

  it('renders the about page', () => {
    renderPage(<About />, '/about/');
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Summer Liu/ })).toBeInTheDocument();
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

  it('links to email, CV and social profiles', () => {
    renderPage(<Home />);
    expect(screen.getByRole('link', { name: new RegExp(site.email) })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    );
    expect(screen.getByRole('link', { name: 'View CV' })).toHaveAttribute('href', site.cvUrl);
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
