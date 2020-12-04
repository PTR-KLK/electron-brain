module.exports = {
  siteMetadata: {
    title: `Electron Brain`,
  },
  plugins: [
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
  ],
}
