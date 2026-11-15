import type { Dictionary } from './types';

/*
 * Traditional Chinese (Taiwan). Drafted from the English CV — please review the wording.
 * Company names, product names and tools stay in English, as is usual in Taiwanese tech CVs.
 */
export const zhTW = {
  meta: {
    languageName: '中文',
    ogLocale: 'zh_TW',
    switchTo: '閱讀中文版',
    space: '',
    comma: '，',
  },
  site: {
    role: '資深前端工程師',
    location: '台灣台北',
    summary:
      '資深前端工程師，擁有超過 5 年經驗，專精以 React、TypeScript 與 Next.js 打造高效能、可擴展且易於維護的網頁應用程式。',
  },
  nav: {
    home: '首頁',
    experience: '經歷',
    about: '關於我',
    primary: '主要導覽',
    mobile: '行動版導覽',
    openMenu: '開啟選單',
    closeMenu: '關閉選單',
    skipToContent: '跳至主要內容',
    toggleTheme: '切換深色模式',
  },
  profile: [
    '我是一名資深前端工程師，擁有超過五年打造高效能、可擴展且易於維護之網頁應用程式的經驗，熟練運用 React、TypeScript 與 Next.js。',
    '我擅長撰寫完整的測試、優化應用程式效能，並在敏捷、以工程為導向的團隊中協作。我重視程式碼品質與技術文件，也期待參與打造新一代的智慧系統。',
  ],
  home: {
    eyebrow: '5 年以上經驗 · 台灣台北',
    tagline: [
      '以 React、TypeScript 與 Next.js 打造',
      { em: '高效能' },
      '、',
      { em: '可擴展' },
      '且',
      { em: '易於維護' },
      '的網頁應用程式。',
    ],
    seeExperience: '查看我的經歷',
    sayHello: '與我聯繫',
    strengthsHeading: '我的專長',
    strengths: {
      performance: {
        title: '效能與規模',
        description: '打造響應式、跨瀏覽器的 React 與 Next.js 應用程式，服務全球使用者。',
      },
      testing: {
        title: '完善測試、穩定可靠',
        description: '以 Vitest、Jest、Testing Library 與 MSW 撰寫單元與整合測試。',
      },
      accessibility: {
        title: '無障礙優先',
        description: '打造無障礙、高品質的介面，並以 Axe-Core 驗證。',
      },
      i18n: {
        title: '多語系就緒',
        description: '使用 i18next 與 POEditor 管理多個應用程式的在地化流程。',
      },
    },
    introHeading: '嗨，我是 Summer，一名在台北的前端工程師。',
    introEmphasis: '我在乎程式碼品質。',
    latestRole: (title, company) => (
      <>
        最近，我在 {company} 擔任{title}，參與開發全球使用的大型教育與電商平台。
      </>
    ),
    moreAboutMe: '更多關於我',
  },
  experience: {
    metaDescription: 'Summer Liu 的工作經歷：ViewSonic、Blocktown.co 與 CLC Tech 的前端職務。',
    eyebrow: '經歷',
    title: '工作經歷',
    beforeTech: '轉職前',
    toAbout: '技能、學歷與語言能力',
    roles: {
      viewsonic: {
        title: '前端工程師',
        summary: '參與多個高影響力的前端專案，開發並維護全球使用的大型教育與電商平台。',
        highlights: [
          '使用 React、Next.js 與 TypeScript 開發響應式、功能豐富的應用程式，確保 Originals Content Platform 等平台的高效能與跨瀏覽器相容性。',
          '以 Vitest 與 Jest 撰寫完整的單元與整合測試來開發並驗證複雜功能，達成高測試覆蓋率，確保功能穩定且可重現。',
          '在 monorepo 中架構並維護共用元件庫（next-fe-common-lib），提升各專案之間的一致性與重用性。',
          '運用 POEditor 與 i18next 管理並同步在地化流程，確保多個應用程式的翻譯正確且即時更新。',
          '與 UI/UX、QA 及後端團隊協作整合 GraphQL API，交付無障礙且高品質的教育工具。',
        ],
      },
      blocktown: {
        title: '軟體工程師',
        highlights: [
          '使用 React 與 Styled System 為面向客戶的網頁應用程式打造並優化可重用的 UI 元件。',
          '採用敏捷開發方法，並定期擔任 Scrum Master，負責管理 Sprint 與團隊工作流程。',
        ],
      },
      clc: {
        title: '前端工程師',
        highlights: ['使用 React 與 Preact 開發響應式網頁，並透過 AJAX 串接後端 API。'],
      },
    },
    earlierRoles: {
      tinklabs: '客戶關係專員',
      google: '資料中心安全人員',
    },
  },
  about: {
    metaDescription: '關於 Summer Liu，台灣台北的資深前端工程師：個人簡介、技術能力、學歷與語言能力。',
    eyebrow: '資深前端工程師 · 台灣台北',
    portraitAlt: 'Summer Liu 在秋天的河畔步道上微笑',
    skillsEyebrow: '工具箱',
    skillsTitle: '技術能力',
    skillGroups: {
      languages: '程式語言與框架',
      testing: '測試與驗證',
      styling: '樣式',
      data: '資料與狀態管理',
      i18n: '國際化（i18n）',
      tooling: 'DevOps 與開發工具',
    },
    backgroundEyebrow: '背景',
    backgroundTitle: '學歷與語言能力',
    educationHeading: '學歷',
    languagesHeading: '語言能力',
    education: {
      nkuht: {
        school: '國立高雄餐旅大學',
        detail: '應用英語系 學士',
      },
      ucb: {
        school: '英國伯明罕大學學院（University College Birmingham）',
        detail: '餐旅與觀光管理 文憑',
      },
    },
    certifications: {
      toeic: { title: '多益（TOEIC）聽力與閱讀', detail: '950 分' },
      ielts: { title: '雅思（IELTS）', detail: '總分 6.0' },
    },
  },
  footer: {
    eyebrow: '聯絡我',
    heading: '有想法嗎？',
    emphasis: '一起實現它。',
  },
} as const satisfies Dictionary;
