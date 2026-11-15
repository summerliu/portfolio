import type { Dictionary } from './types';

export const en = {
  meta: {
    languageName: 'English',
    ogLocale: 'en_US',
    switchTo: 'Read in English',
    space: ' ',
    comma: ', ',
  },
  site: {
    role: 'Senior Frontend Engineer',
    location: 'Taipei, Taiwan',
    summary:
      'Senior Frontend Engineer with over 5 years of experience building high-performance, scalable and maintainable web applications with React, TypeScript and Next.js.',
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    about: 'About',
    primary: 'Primary',
    mobile: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    toggleTheme: 'Toggle dark mode',
  },
  profile: [
    'I’m a Senior Frontend Engineer with over five years of experience building high-performance, scalable and maintainable web applications, with proven expertise in React, TypeScript and Next.js.',
    'I have a strong background in writing comprehensive test suites, optimising application performance and collaborating in agile, engineering-driven teams. I’m passionate about code quality, technical documentation, and shaping the next generation of intelligent systems.',
  ],
  home: {
    eyebrow: '5+ years experience · Taipei, Taiwan',
    tagline: [
      'Building ',
      { em: 'high-performance' },
      ', ',
      { em: 'scalable' },
      ' and ',
      { em: 'maintainable' },
      ' web applications with React, TypeScript and Next.js.',
    ],
    seeExperience: 'See my experience',
    sayHello: 'Say hello',
    strengthsHeading: 'What I bring',
    strengths: {
      performance: {
        title: 'Performance at scale',
        description: 'Responsive, cross-browser React and Next.js apps used by a global audience.',
      },
      testing: {
        title: 'Tested & reliable',
        description: 'Unit and integration suites with Vitest, Jest, Testing Library and MSW.',
      },
      accessibility: {
        title: 'Accessible by default',
        description: 'Accessible, high-quality interfaces, validated with Axe-Core.',
      },
      i18n: {
        title: 'Ready for every locale',
        description: 'Localisation workflows with i18next and POEditor across multiple apps.',
      },
    },
    introHeading: 'Hi, I’m Summer — a frontend engineer in Taipei.',
    introEmphasis: 'I care about code quality.',
    latestRole: (title, company) => (
      <>
        Most recently I was a {title} at {company}, working on large-scale educational and e-commerce
        platforms used globally.
      </>
    ),
    moreAboutMe: 'More about me',
  },
  experience: {
    metaDescription: 'Where Summer Liu has worked: frontend roles at ViewSonic, Blocktown.co and CLC Tech.',
    eyebrow: 'Experience',
    title: 'Where I’ve worked',
    beforeTech: 'Before tech',
    toAbout: 'Skills, education & languages',
    roles: {
      viewsonic: {
        title: 'Frontend Developer',
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
      blocktown: {
        title: 'Software Engineer',
        highlights: [
          'Built and optimised reusable UI components for client-facing web applications with React and Styled System.',
          'Worked with agile methodologies, periodically serving as Scrum Master to manage sprints and team workflows.',
        ],
      },
      clc: {
        title: 'Frontend Developer',
        highlights: [
          'Developed responsive web pages with React and Preact, integrating backend APIs via AJAX.',
        ],
      },
    },
    earlierRoles: {
      tinklabs: 'Customer Relations Executive',
      google: 'Data Center Security Officer',
    },
  },
  about: {
    metaDescription:
      'About Summer Liu, Senior Frontend Engineer in Taipei, Taiwan: profile, technical skills, education and languages.',
    eyebrow: 'Senior Frontend Engineer · Taipei, Taiwan',
    portraitAlt: 'Summer Liu smiling by a riverside walkway in autumn',
    skillsEyebrow: 'Toolkit',
    skillsTitle: 'Technical skills',
    skillGroups: {
      languages: 'Languages & frameworks',
      testing: 'Testing & validation',
      styling: 'Styling',
      data: 'Data & state',
      i18n: 'Internationalisation',
      tooling: 'DevOps & tooling',
    },
    backgroundEyebrow: 'Background',
    backgroundTitle: 'Education & languages',
    educationHeading: 'Education',
    languagesHeading: 'Languages',
    education: {
      nkuht: {
        school: 'National Kaohsiung University of Hospitality and Tourism',
        detail: 'Bachelor’s degree, Applied English',
      },
      ucb: {
        school: 'University College Birmingham',
        detail: 'Diploma, Hospitality and Tourism Management',
      },
    },
    certifications: {
      toeic: { title: 'TOEIC Listening and Writing', detail: 'Score 950' },
      ielts: { title: 'IELTS', detail: 'Overall 6.0' },
    },
  },
  footer: {
    eyebrow: 'Get in touch',
    heading: 'Have an idea?',
    emphasis: 'Let’s build it.',
  },
} as const satisfies Dictionary;
