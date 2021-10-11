module.exports = {
  title: "Revest",
  tagline: "Documentation and Guides",
  url: "https://docs.Revest.org/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.png",
  organizationName: "Revest-Finance", // Usually your GitHub org/user name.
  projectName: "Revest-docs", // Usually your repo name.
  themeConfig: {
    image: "img/twitter_card_bg.jpg",
    prism: {
      additionalLanguages: ["solidity"],
    },
    algolia: {
      apiKey: "32465e2ab6f7554ff014e64c0d92171c",
      indexName: "v3-docs",
      appId: "S0IDD0YGLZ",
    },
    navbar: {
      title: "Revest Docs",
      logo: {
        alt: "Revest",
        src: "img/Revest Logo 1.svg",
      },
      items: [
        {
          type: "docsVersionDropdown",
          //// Optional
          position: "left",
          dropdownActiveClassDisabled: false,
          docsPluginId: "default",
          className: "persistent",
        },
        // TODO: Check these links
        // {
        //   to: "/protocol/reference/smart-contracts",
        //   label: "Contracts",
        //   position: "left",
        //   className: "V1_active",
        // },
        // {
        //   to: "/sdk/introduction",
        //   label: "SDK",
        //   position: "left",
        //   className: "V1_active",
        // },
        // {
        //   to: "/sdk/Subgraph%20data",
        //   label: "Subgraph (API)",
        //   position: "left",
        //   className: "V1_active",
        // },
        // {
        //   to: "/protocol/concepts/governance/overview",
        //   label: "Governance",
        //   position: "left",
        //   className: "V1_active",
        // },
        // {
        //   to: "/protocol/V2/guides/smart-contract-integration/quick-start",
        //   label: "Contracts",
        //   position: "left",
        //   className: "V2_active",
        // },
        // {
        //   to: "/sdk/2.0.0/introduction",
        //   label: "SDK",
        //   position: "left",
        //   className: "V2_active",
        // },
        // {
        //   to: "/protocol/V2/reference/API/overview",
        //   label: "Subgraph (API)",
        //   position: "left",
        //   className: "V2_active",
        // },
        // {
        //   to: "/protocol/V2/concepts/governance/overview",
        //   label: "Governance",
        //   position: "left",
        //   className: "V2_active",
        // },
        // {
        //   to: "/protocol/V1/guides/connect-to-uniswap",
        //   label: "Contracts",
        //   position: "left",
        //   className: "V1_active",
        // },
        // {
        //   to: "/sdk/1.0.0/introduction",
        //   label: "SDK",
        //   position: "left",
        //   className: "V1_active",
        // },
        {
          label: "One Pager",
          to: "https://revest.finance/Revest-One-Pager.pdf",
          position: "right",
          className: "persistent",
        },
        {
          label: "Whitepaper",
          to: "https://revest.finance/Revest_Whitepaper.pdf",
          position: "right",
          className: "persistent",
        },
        {
          href: "https://github.com/Revest-Finance",
          label: "GitHub",
          position: "right",
          className: "persistent",
        },
        // {
        //   href: "https://unigrants.org/",
        //   label: "Grants",
        //   position: "right",
        //   className: "persistent",
        // },
        {
          type: "localeDropdown",

          //// Optional
          position: "right",
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [
            {
              to: "https://my-site.com/help-us-translate",
              label: "Help us translate",
            },
          ],
        },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: "Developers",
          items: [
            // TODO: Is there any BugBounty
            // {
            //   label: "Bug Bounty",
            //   href: "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md",
            // },
            // TODO: Is there any Dev chat for developers who wanna integrate Revest
            // {
            //   label: "#dev-chat",
            //   href: "https://discord.gg/ybKVQUWb4s",
            // },
            {
              label: "One Pager",
              href: "https://revest.finance/Revest-One-Pager.pdf",
            },
            {
              label: "Whitepaper",
              href: "https://revest.finance/Revest_Whitepaper.pdf",
            },
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "RevestContracts",
              href: "https://github.com/Revest-Finance/RevestContracts",
            }
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://revest.finance/",
            },
            {
              label: "App",
              href: "https://app.revest.finance/",
            },
            {
              label: "Gallery",
              href: "https://app.revest.finance/",
            },
            {
              label: "Mint",
              href: "https://app.revest.finance/mint",
            },
            {
              label: "Staking",
              href: "https://app.revest.finance/staking",
            },
            {
              label: "Claim",
              href: "https://revest.finance/claim",
            },
            // TODO: Check the brand assets
            // {
            //   label: "Brand Assets",
            //   href: "https://uniswap.org/Uniswap_brand_assets.zip",
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Subscribe",
              href: "https://revest.finance/#subscribe",
            },
            {
              label: "Telegram",
              href: "https://t.me/revestfinance",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/TdJSzW9H4G",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/RevestFinance",
            },
            // TODO: Check the blog page
            // {
            //   label: "Blog",
            //   href: "https://uniswap.org/blog/",
            // },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "\u{263D}",

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "\u{263C}",
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "protocol",
          routeBasePath: "protocol/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/uniswap/uniswap-docs/tree/main/",
          includeCurrentVersion: false,
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "SDK",
        path: "sdk",
        routeBasePath: "sdk/",
        sidebarPath: require.resolve("./sdkSidebars.js"),
        includeCurrentVersion: false,
      },
    ],
  ],
};
