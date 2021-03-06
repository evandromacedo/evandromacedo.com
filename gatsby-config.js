require('dotenv').config()
const queries = require('./src/utils/algoliaQueries')

module.exports = {
  siteMetadata: {
    title: `Evandro Macedo - Web Developer`,
    description: `Personal website and blog by Evandro Macedo about Web Development focused on Front-end.`,
    author: `@evandromacedo_`,
    siteUrl: `https://www.evandromacedo.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              quality: 100,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-static-images`,
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Evandro Macedo`,
        short_name: `Evandro Macedo`,
        start_url: `/`,
        background_color: `#01AEEF`,
        theme_color: `#01AEEF`,
        display: `standalone`,
        icon: `src/images/me-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
  ],
}
