const meta = require('./src/meta')

require('dotenv').config()
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

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
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL,
      },
    },
    'gatsby-alias-imports',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        previewMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/netlify-cms.js`,
        htmlTitle: `TPE Content Manager`,
        htmlFavicon: `${__dirname}/static/favicon/favicon.ico`,
      },
    },
    `gatsby-plugin-netlify-cache`,
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     maxResults: 2600,
    //     tags: true,
    //     context: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `events`,
    //     path: `${__dirname}/src/assets/events/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `corporate-events`,
    //     path: `${__dirname}/src/assets/events/corporate-events/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `editorials`,
    //     path: `${__dirname}/src/assets/events/editorials/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `private-events`,
    //     path: `${__dirname}/src/assets/events/private-events/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `weddings`,
    //     path: `${__dirname}/src/assets/events/weddings/`,
    //   },
    // },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `2183081444`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Lato`,
              variants: [`300`, `300i`, `400`, `400i`, `700`, `700i`],
            },
            {
              family: `Crimson Pro`,
              variants: [`300`, `300i`, `400`, `400i`, `700i`],
            },
          ],
        },
        useMinify: true,
        usePreload: true,
      },
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     typeName: 'GitHub',
    //     fieldName: 'github',
    //     url: 'https://api.github.com/graphql',
    //     headers: {
    //       Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
    //     },
    //     fetchOptions: {},
    //   },
    // },
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
    'gatsby-plugin-offline',
  ],
}
