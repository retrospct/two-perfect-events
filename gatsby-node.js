// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    {
      allDatoCmsEvent {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  data.allDatoCmsEvent.edges.forEach((edge) => {
    const event = edge.node
    createPage({
      path: `/portfolio/${event.slug}/`,
      component: require.resolve('./src/templates/event-graphql.js'),
      context: {
        slug: event.slug,
      },
    })
  })
}