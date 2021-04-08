import { useStaticQuery, graphql } from 'gatsby'

export const useInstaLatest = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`query InstaLatest {
  allInstaNode(limit: 9) {
    edges {
      node {
        id
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            gatsbyImageData(width: 320, height: 320, layout: CONSTRAINED)
          }
        }
      }
    }
  }
}
`)
  return edges
}
