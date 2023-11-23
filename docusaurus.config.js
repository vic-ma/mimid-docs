// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mimid Docs",
  tagline: "Documentation for Mimid",
  favicon: "img/maximized_icon.png",

  // Set the production url of your site here
  url: "https://docs.mimid.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vic-ma", // Usually your GitHub org/user name.
  projectName: "mimid-docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "author", content: "Victor Ma" },
        { name: "description", content: "Documentation for Mimid." },
      ],
      navbar: {
        title: "Mimid Docs",
        logo: {
          alt: "Mimid logo",
          src: "img/maximized_icon.png",
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Mimid",
            items: [
              {
                label: "App",
                href: "https://mimid.app",
              },
              {
                label: "GitHub",
                href: "https://github.com/vic-ma/mimid",
              },
              {
                label: "Donate",
                href: "https://ko-fi.com/mimid",
              },
            ],
          },
          {
            title: "Mimid Docs",
            items: [
              {
                label: "Privacy Policy",
                to: "privacy",
              },
              {
                label: "GitHub",
                href: "https://github.com/vic-ma/mimid-docs",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

export default config;
