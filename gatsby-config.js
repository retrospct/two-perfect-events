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
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'two-perfect-events', // (REQUIRED, replace with your own)
        accessToken: process.env.PRISMIC_API_TOKEN, // (optional API access token)
        path: '/preview', // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: 'Article', // TypeName from prismic
            match: '/article/:uid', // Pages will be generated under this pattern
            path: '/article', // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/article.js'),
          },
          {
            type: 'Home',
            match: '/home',
            path: '/home',
            component: require.resolve('./src/templates/home.js'),
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
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
    `gatsby-plugin-offline`,
  ],
}
