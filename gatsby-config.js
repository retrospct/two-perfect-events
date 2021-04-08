const meta = require('./src/meta') // TODO: check if needed or this all pulled from DatoCMS
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: meta.defaultTitle,
    description: meta.defaultDescription,
    author: meta.author,
    url: meta.url,
    keywords: meta.keywords,
    image: `${meta.url}/icons/icon_512x512.png`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-pixel',
      options: {
        pixelId: process.env.FACEBOOK_PIXEL,
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // 'gatsby-plugin-netlify-cache',
    // 'gatsby-plugin-offline',
    'gatsby-plugin-svgr',
    // {
    //   resolve: 'gatsby-plugin-svgr',
    //   options: {
    //     prettier: true,          // use prettier to format JS code output (default)
    //     svgo: true,              // use svgo to optimize SVGs (default)
    //     svgoConfig: {
    //       plugins: [
    //         { removeViewBox: true }, // remove viewBox when possible (default)
    //         { cleanupIDs: true },    // remove unused IDs and minify remaining IDs (default)
    //       ],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: true,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `weddings`,
    //     path: `${__dirname}/src/assets/events/weddings/`,
    //   },
    // },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '2183081444',
        access_token:
          'EAAVh278ZAIooBAI9ZCpaSsqXcMCInZCdiZAvZBDrCZBK0iKDaFl2ac5BlopnD3Bh7OVQu6eZAw2ZBQqaEgI2ZCNlm93ZBkygNDMH6Qpdrqw6cOU43ZCJhvPdfksUCp5UCQvfvHLpdCysuROgDsjxM9nCjoGtZAPxpGUZAFXwx0rtG6KbktfZAGZAKRBTVuhy1fy3doowR8ZD',
        instagram_id: '17841402203322885',
        // paginate: 9,
        maxPosts: 9,
        // hashtags: true
      },
    },
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Lato',
              variants: ['300', '300i', '400', '400i', '700', '700i'],
            },
            {
              family: 'Crimson Pro',
              variants: ['300', '300i', '400', '400i', '700i'],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: meta.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/favicon-11.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: meta.defaultTitle,
        short_name: meta.defaultTitle,
        description: meta.defaultDescription,
        start_url: '/',
        background_color: meta.backgroundColor,
        theme_color: meta.themeColor,
        display: 'minimal-ui',
        icon: './static/favicon/favicon-11.png',
      },
    },
  ],
}
