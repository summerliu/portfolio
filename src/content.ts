import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faFlaskVial, faGaugeHigh, faLanguage, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

/*
 * Language-independent facts from the CV: names, dates, companies, tools, links.
 * All human-readable text lives in the per-locale dictionaries under src/i18n/,
 * keyed by the ids below so TypeScript checks every locale covers every entry.
 */

export const site = {
  name: 'Summer Liu',
  url: 'https://summerliu.github.io/portfolio/',
  email: 'summer.ycliu@gmail.com',
} as const;

export interface SocialLink {
  href: string;
  label: string;
  icon: IconDefinition;
}

export const socialLinks: readonly SocialLink[] = [
  { href: 'https://www.linkedin.com/in/summer-liu-260b7681/', label: 'LinkedIn', icon: faLinkedin },
  { href: 'https://github.com/summerliu', label: 'GitHub', icon: faGithub },
  { href: 'https://medium.com/@summer.ycliu', label: 'Medium', icon: faMedium },
];

/** 'YYYY-MM' for month precision, 'YYYY' for year precision. */
export type DateStamp = `${number}-${number}` | `${number}`;
export interface Period {
  start: DateStamp;
  end: DateStamp;
}

export const strengths = [
  { id: 'performance', icon: faGaugeHigh },
  { id: 'testing', icon: faFlaskVial },
  { id: 'accessibility', icon: faUniversalAccess },
  { id: 'i18n', icon: faLanguage },
] as const;
export type StrengthId = (typeof strengths)[number]['id'];

export const roles = [
  { id: 'viewsonic', company: 'ViewSonic', period: { start: '2022-08', end: '2025-12' } },
  { id: 'blocktown', company: 'Blocktown.co', period: { start: '2020-02', end: '2022-03' } },
  { id: 'clc', company: 'CLC Tech', period: { start: '2019-03', end: '2019-09' } },
] as const satisfies readonly { id: string; company: string; period: Period }[];
export type RoleId = (typeof roles)[number]['id'];

export const earlierRoles = [
  { id: 'tinklabs', company: 'Tink Labs', period: { start: '2018-01', end: '2018-06' } },
  { id: 'google', company: 'Google', period: { start: '2015-09', end: '2017-07' } },
] as const satisfies readonly { id: string; company: string; period: Period }[];
export type EarlierRoleId = (typeof earlierRoles)[number]['id'];

export const skills = [
  { id: 'languages', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js'] },
  { id: 'testing', items: ['Jest', 'Vitest', 'React Testing Library', 'Mock Service Worker', 'Axe-Core'] },
  { id: 'styling', items: ['Tailwind CSS', 'Styled Components', 'CSS-in-JS'] },
  { id: 'data', items: ['GraphQL', 'TanStack Query'] },
  { id: 'i18n', items: ['i18next', 'react-i18next', 'POEditor'] },
  { id: 'tooling', items: ['Azure DevOps', 'Git', 'pnpm', 'ESLint', 'Prettier', 'Sentry', 'Docker'] },
] as const;
export type SkillGroupId = (typeof skills)[number]['id'];

export const education = [
  { id: 'nkuht', period: { start: '2011', end: '2015' } },
  { id: 'ucb', period: { start: '2013', end: '2014' } },
] as const satisfies readonly { id: string; period: Period }[];
export type EducationId = (typeof education)[number]['id'];

export const certifications = [
  { id: 'toeic', year: '2026' },
  { id: 'ielts', year: '2013' },
] as const;
export type CertificationId = (typeof certifications)[number]['id'];
