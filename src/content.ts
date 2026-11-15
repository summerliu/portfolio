import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';

export const site = {
  name: 'Summer Liu',
  role: 'Frontend Developer',
  location: 'Taiwan',
  url: 'https://summerliu.github.io/portfolio/',
  email: 'summer.ycliu@gmail.com',
  cvUrl: 'https://drive.google.com/file/d/1VxylXI7z7ObyPm48iZ71ebPbfCv_RRgN/view?usp=sharing',
} as const;

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
