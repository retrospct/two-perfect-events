import { useStaticQuery, graphql } from 'gatsby'

export const useSiteDatoMeta = () => {
  const { site } = useStaticQuery(graphql`
    query SiteDatoMeta {
      #   site {
      #     siteMetadata {
      #       title
      #       siteUrl
      #       headline
      #       description
      #       image
      #       video
      #       twitter
      #       name
      #       logo
      #     }
      #   }
      # }
      site: datoCmsSite {
        domain
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          facebookPageUrl
          fallbackSeo {
            title
            description
            image {
              url
            }
            twitterCard
          }
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
    }
  `)
  return site
}
