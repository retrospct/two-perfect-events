import { useStaticQuery, graphql } from 'gatsby'

export const useInstaLatest = () => {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(graphql`
    query InstaLatest {
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
                fluid(maxWidth: 320, maxHeight: 320) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            # Only available with the public api scraper
            # thumbnails {
            #   src
            #   config_width
            #   config_height
            # }
            # dimensions {
            #   height
            #   width
            # }
          }
        }
      }
    }
  `)
  return edges
}
