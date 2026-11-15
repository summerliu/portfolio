import type { ReactNode } from 'react';
import type {
  CertificationId,
  EarlierRoleId,
  EducationId,
  RoleId,
  SkillGroupId,
  StrengthId,
} from '../content';

/** Text with emphasised fragments, e.g. ['Building ', { em: 'fast' }, ' apps']. */
export type RichText = readonly (string | { em: string })[];

interface Labelled {
  title: string;
  description: string;
}

/** Every string on the site. Each locale must provide all of it. */
export interface Dictionary {
  meta: {
    /** Name of this language, written in itself (shown in the language switcher). */
    languageName: string;
    /** Open Graph locale, e.g. en_US. */
    ogLocale: string;
    /** Label for the link that switches *to* this language. */
    switchTo: string;
    /** Space between two sentences/phrases: ' ' in English, '' in Chinese. */
    space: string;
    /** List comma: ', ' in English, '，' in Chinese. */
    comma: string;
  };
  site: {
    role: string;
    location: string;
    summary: string;
  };
  nav: {
    home: string;
    experience: string;
    about: string;
    primary: string;
    mobile: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    toggleTheme: string;
  };
  profile: readonly [string, string];
  home: {
    eyebrow: string;
    tagline: RichText;
    seeExperience: string;
    sayHello: string;
    strengthsHeading: string;
    strengths: Record<StrengthId, Labelled>;
    introHeading: string;
    introEmphasis: string;
    latestRole: (title: string, company: ReactNode) => ReactNode;
    moreAboutMe: string;
  };
  experience: {
    metaDescription: string;
    eyebrow: string;
    title: string;
    beforeTech: string;
    toAbout: string;
    roles: Record<RoleId, { title: string; summary?: string; highlights: readonly string[] }>;
    earlierRoles: Record<EarlierRoleId, string>;
  };
  about: {
    metaDescription: string;
    eyebrow: string;
    portraitAlt: string;
    skillsEyebrow: string;
    skillsTitle: string;
    skillGroups: Record<SkillGroupId, string>;
    backgroundEyebrow: string;
    backgroundTitle: string;
    educationHeading: string;
    languagesHeading: string;
    education: Record<EducationId, { school: string; detail: string }>;
    certifications: Record<CertificationId, { title: string; detail: string }>;
  };
  footer: {
    eyebrow: string;
    heading: string;
    emphasis: string;
  };
}
