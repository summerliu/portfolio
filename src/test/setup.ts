import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { createElement, type ImgHTMLAttributes } from 'react';
import { afterEach, vi } from 'vitest';

afterEach(() => {
  cleanup();
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

// Tests set the current route through `navigation`.
vi.mock('next/navigation', async () => {
  const { navigation } = await import('./navigation');
  return { useSelectedLayoutSegment: () => navigation.segment };
});

// next/image expects build-time image metadata; a plain <img> is enough for tests.
vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    priority: _p,
    preload: _pl,
    ...rest
  }: ImgHTMLAttributes<HTMLImageElement> & {
    src: string | { src: string };
    priority?: boolean;
    preload?: boolean;
  }) => createElement('img', { ...rest, alt, src: typeof src === 'string' ? src : src.src }),
}));

// jsdom implements neither matchMedia nor the Popover API.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
HTMLElement.prototype.hidePopover ??= vi.fn();
