import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'פילוסופיה חיה',
  tagline: 'פלטפורמת למידה אינטראקטיבית לפילוסופיה',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://econlabppe-cloud.github.io',
  baseUrl: '/philosophy-platform/',

  organizationName: 'econlabppe-cloud',
  projectName: 'philosophy-platform',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/econlabppe-cloud/philosophy-platform/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'פילוסופיה חיה',
      logo: {
        alt: 'פילוסופיה חיה',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'chronologicalSidebar',
          position: 'right',
          label: '📚 מסלול כרונולוגי',
        },
        {
          type: 'docSidebar',
          sidebarId: 'thematicSidebar',
          position: 'right',
          label: '🔮 מסלול תמטי',
        },
        {
          href: 'https://github.com/econlabppe-cloud/philosophy-platform',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'מסלולים',
          items: [
            {
              label: 'מסלול כרונולוגי',
              to: '/docs/כרונולוגי/עתיק/אריסטו',
            },
            {
              label: 'מסלול תמטי',
              to: '/docs/תמטי/זהות/feminism-gender-locke-aristotle',
            },
          ],
        },
        {
          title: 'קהילה',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/econlabppe-cloud/philosophy-platform/discussions',
            },
          ],
        },
        {
          title: 'עוד',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/econlabppe-cloud/philosophy-platform',
            },
          ],
        },
      ],
      copyright: `זכויות יוצרים © ${new Date().getFullYear()} פילוסופיה חיה. נבנה עם Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
