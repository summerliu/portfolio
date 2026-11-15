import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { site } from './content';
import { renderRoute } from './test/renderRoute';

describe('routing', () => {
  it('renders the home page', () => {
    renderRoute('/');
    expect(screen.getByRole('heading', { level: 1, name: 'Web Frontend Developer' })).toBeInTheDocument();
  });

  it('renders the about page', () => {
    renderRoute('/about');
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Summer Liu/ })).toBeInTheDocument();
  });

  it('renders a 404 for unknown paths', () => {
    renderRoute('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1, name: /wandered off/ })).toBeInTheDocument();
  });

  it('navigates from home to about', async () => {
    renderRoute('/');
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' });
    await userEvent.click(within(primaryNav).getByRole('link', { name: 'About' }));
    expect(screen.getByRole('heading', { level: 1, name: site.name })).toBeInTheDocument();
  });

  it('marks the current page in the primary nav', () => {
    renderRoute('/about');
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(within(nav).getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
  });
});

describe('layout', () => {
  it('links to email, CV and social profiles', () => {
    renderRoute('/');
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
    renderRoute('/');
    await userEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument();
  });
});
