module.exports = {
  siteMetadata: {
    title: `Electron Brain`,
    description: `A simple page with electron brain`,
    author: `ptr-klk`,
    year: "2020",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ElectronBrain`,
        short_name: `ElectronBrain`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/favicon-8x8.ico`,
            sizes: `8x8`,
            purpose: `maskable`,
          },
          {
            src: `icons/favicon-16x16.ico`,
            sizes: `16x16`,
            purpose: `maskable`,
          },
          {
            src: `icons/favicon-24x24.ico`,
            sizes: `24x24`,
            purpose: `maskable`,
          },
          {
            src: `icons/favicon-32x32.ico`,
            sizes: `32x32`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/notes/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
            options: {
              stripBrackets: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-markdown-references`,
      options: {
        types: ["MarkdownRemark"],
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400", "700"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "700"],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/theme.js`).lightTheme,
        dark: require(`${__dirname}/theme.js`).darkTheme,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
