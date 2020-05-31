/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// import path from 'path'
const path = require('path')

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, 'src'), 'node_modules'],
//     },
//   })
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allDatoCmsWork.edges.map(({ node: work }) => {
          createPage({
            path: `works/${work.slug}`,
            component: path.resolve(__dirname, `./src/templates/work.js`),
            context: {
              slug: work.slug,
            },
          })
          return console.log('createPage complete') // TODO: this should return something stating that the pages were created
        })
        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })
}
