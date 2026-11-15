import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faFlaskVial, faGaugeHigh, faLanguage, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

/* All copy on the site lives here, sourced from the CV. */

export const site = {
  name: 'Summer Liu',
  role: 'Senior Frontend Engineer',
  location: 'Taipei, Taiwan',
  url: 'https://summerliu.github.io/portfolio/',
  email: 'summer.ycliu@gmail.com',
  summary:
    'Senior Frontend Engineer with over 5 years of experience building high-performance, scalable and maintainable web applications with React, TypeScript and Next.js.',
} as const;

export const profile = [
  'I’m a Senior Frontend Engineer with over five years of experience building high-performance, scalable and maintainable web applications, with proven expertise in React, TypeScript and Next.js.',
  'I have a strong background in writing comprehensive test suites, optimising application performance and collaborating in agile, engineering-driven teams. I’m passionate about code quality, technical documentation, and shaping the next generation of intelligent systems.',
] as const;

export interface NavItem {
  to: string;
  label: string;
}

export const navItems: readonly NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

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

export interface Strength {
  title: string;
  description: string;
  icon: IconDefinition;
}

export const strengths: readonly Strength[] = [
  {
    title: 'Performance at scale',
    description: 'Responsive, cross-browser React and Next.js apps used by a global audience.',
    icon: faGaugeHigh,
  },
  {
    title: 'Tested & reliable',
    description: 'Unit and integration suites with Vitest, Jest, Testing Library and MSW.',
    icon: faFlaskVial,
  },
  {
    title: 'Accessible by default',
    description: 'Accessible, high-quality interfaces, validated with Axe-Core.',
    icon: faUniversalAccess,
  },
  {
    title: 'Ready for every locale',
    description: 'Localisation workflows with i18next and POEditor across multiple apps.',
    icon: faLanguage,
  },
];

export interface Role {
  title: string;
  company: string;
  period: string;
  summary?: string;
  highlights: readonly string[];
}

export const experience: readonly Role[] = [
  {
    title: 'Frontend Developer',
    company: 'ViewSonic',
    period: 'Aug 2022 – Dec 2025',
    summary:
      'Key contributor to multiple high-impact frontend projects, developing and maintaining large-scale educational and e-commerce platforms used globally.',
    highlights: [
      'Engineered responsive, feature-rich applications with React, Next.js and TypeScript, ensuring high performance and cross-browser compatibility for platforms such as the Originals Content Platform.',
      'Developed and validated complex features with comprehensive unit and integration tests in Vitest and Jest, achieving high coverage and reliable, reproducible behaviour.',
      'Architected and maintained a shared component library in a monorepo (next-fe-common-lib) for consistency and reuse across projects.',
      'Managed and synchronised localisation workflows with POEditor and i18next, keeping translations accurate and up to date across multiple applications.',
      'Collaborated with UI/UX, QA and backend teams to integrate GraphQL APIs and deliver accessible, high-quality educational tools.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Blocktown.co',
    period: 'Feb 2020 – Mar 2022',
    highlights: [
      'Built and optimised reusable UI components for client-facing web applications with React and Styled System.',
      'Worked with agile methodologies, periodically serving as Scrum Master to manage sprints and team workflows.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'CLC Tech',
    period: 'Mar 2019 – Sep 2019',
    highlights: ['Developed responsive web pages with React and Preact, integrating backend APIs via AJAX.'],
  },
];

export const earlierRoles: readonly Pick<Role, 'title' | 'company' | 'period'>[] = [
  { title: 'Customer Relations Executive', company: 'Tink Labs', period: 'Jan 2018 – Jun 2018' },
  { title: 'Data Center Security Officer', company: 'Google', period: 'Sep 2015 – Jul 2017' },
];

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export const skills: readonly SkillGroup[] = [
  { label: 'Languages & frameworks', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js'] },
  {
    label: 'Testing & validation',
    items: ['Jest', 'Vitest', 'React Testing Library', 'Mock Service Worker', 'Axe-Core'],
  },
  { label: 'Styling', items: ['Tailwind CSS', 'Styled Components', 'CSS-in-JS'] },
  { label: 'Data & state', items: ['GraphQL', 'TanStack Query'] },
  { label: 'Internationalisation', items: ['i18next', 'react-i18next', 'POEditor'] },
  {
    label: 'DevOps & tooling',
    items: ['Azure DevOps', 'Git', 'pnpm', 'ESLint', 'Prettier', 'Sentry', 'Docker'],
  },
];

export interface Credential {
  title: string;
  detail: string;
  period: string;
}

export const education: readonly Credential[] = [
  {
    title: 'National Kaohsiung University of Hospitality and Tourism',
    detail: 'Bachelor’s degree, Applied English',
    period: '2011 – 2015',
  },
  {
    title: 'University College Birmingham',
    detail: 'Diploma, Hospitality and Tourism Management',
    period: '2013 – 2014',
  },
];

export const certifications: readonly Credential[] = [
  { title: 'TOEIC Listening and Writing', detail: 'Score 950', period: '2026' },
  { title: 'IELTS', detail: 'Overall 6.0', period: '2013' },
];
