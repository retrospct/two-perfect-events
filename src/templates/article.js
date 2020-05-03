import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import htmlSerializer from '../utils/htmlSerializer'
// import { linkResolver } from '../utils/linkResolver'

export const query = graphql`
  query ArticleQuery($uid: String) {
    prismic {
      allArticles(uid: $uid) {
        edges {
          node {
            title
            title1
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
  }
`

const Article = (props) => {
  const doc = props.data.prismic.allArticles.edges.slice(0, 1).pop()
  if (!doc) {
    return null
  }

  return (
    <div>
      {/* <h1>{RichText.render(doc.node.title)}</h1>
      <h1>{RichText.render(doc.node.title1)}</h1>
      <h3>{RichText.render(doc.node.description)}</h3> */}
      <RichText
        render={doc.node.title}
        htmlSerializer={htmlSerializer}
        // linkResolver={linkResolver(doc.node._meta)}
      />
      <RichText
        render={doc.node.title1}
        htmlSerializer={htmlSerializer}
        // linkResolver={linkResolver(doc.node._meta)}
      />
      <RichText
        render={doc.node.description}
        htmlSerializer={htmlSerializer}
        // linkResolver={linkResolver(doc.node._meta)}
      />
    </div>
  )
}

export default Article
