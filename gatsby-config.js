module.exports = {
  siteMetadata: {
    title: `Electron Brain`,
    description: `A simple page with electron brain`,
    author: `ptr-klk`,
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
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-double-brackets-link`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
