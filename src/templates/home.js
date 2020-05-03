import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'
// import { linkResolver } from '../utils/linkResolver'
import { Link } from '../components/link'

export const HomeQuery = graphql`
  query HomeQuery {
    prismic {
      allHomes {
        edges {
          node {
            title
            description
            _meta {
              uid
              lang
              type
            }
          }
        }
      }
    }
    prismic {
      allArticles {
        edges {
          node {
            title
            title1
            description
            page_link {
              __typename
              # ... on _ExternalLink {
              #   url
              # }
              # ... on _FileLink {
              #   name
              #   url
              #   size
              # }
              ... on PRISMIC_Page {
                title
                description
                _meta {
                  uid
                }
              }
            }
            _meta {
              uid
              lang
              type
            }
          }
        }
      }
    }
  }
`

// export const ArticlesQuery = graphql`
//   query ArticleQuery {
//     prismic {
//       allArticles {
//         edges {
//           node {
//             title
//             title1
//             description
//             page_link {
//               __typename
//               # ... on _ExternalLink {
//               #   url
//               # }
//               # ... on _FileLink {
//               #   name
//               #   url
//               #   size
//               # }
//               ... on PRISMIC_Page {
//                 title
//                 description
//                 _meta {
//                   uid
//                 }
//               }
//             }
//             _meta {
//               uid
//               lang
//               type
//             }
//           }
//         }
//       }
//     }
//   }
// `

const Page = (props) => {
  const doc = props.data.prismic.allHomes.edges.slice(0, 1).pop()
  // const article = props.data.prismic.allArticles.edges.slice(0, 1).pop()
  if (!doc) {
    return null
  }

  return (
    <div>
      {/* <h1>{RichText.render(doc.node.title)}</h1>
      <h3>{RichText.render(doc.node.description)}</h3> */}
      <Link to={doc.node.page_link._meta}>Page Link</Link>
      <h1>
        <RichText render={doc.node.title} htmlSerializer={htmlSerializer} />
        {/* <RichText render={doc.node.title} linkResolver={linkResolver} /> */}
      </h1>
      <h3>
        <RichText
          render={doc.node.description}
          htmlSerializer={htmlSerializer}
        />
        {/* <RichText render={doc.node.description} linkResolver={linkResolver} /> */}
      </h3>
    </div>
  )
}

export default Page
