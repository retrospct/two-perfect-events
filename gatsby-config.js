require('dotenv').config()
const siteTitle = 'Two Perfect Events & Weddings'
const siteDescription =
  'Creative wedding & event design, planning, and more. Gracefully executed.'
const siteAuthor = '@retrospct'
const siteUrl = 'https://twoperfectevents.com'
const siteImage = `${siteUrl}/icons/icon_512x512.png`
const siteKeywords = ['gatsby', 'typescript', 'starter', 'javascript', 'react']

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: true,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-svg-sprite`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png',
        icons: [
          {
            src: 'icons/icon_512x512.png',
            sizes: '512x512',
            types: 'image/png',
          },
          {
            src: 'icons/icon_192x192.png',
            sizes: '192x192',
            types: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          branding: {
            brand: 'Two Perfect Events',
            application: 'tpeWebsite',
          },
          reporter: 'v2',
          // checks: {id: '#root', evaluate: },
          // rules: [Object],
          // locale: Object,
          axeVersion: String,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
