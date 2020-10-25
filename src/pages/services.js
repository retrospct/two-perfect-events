import React from 'react'
import { graphql } from 'gatsby'
// import styled from 'styled-components'

import { useTheme } from 'context/themeContext'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Navigation, Container, Connect, Icon, IconParty } from 'components/common'

const Services = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  const { colors } = useTheme()
  return (
    <Layout location={location} footer={data.footer}>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.services.seoMetaTags} />
      <Container>
        <Icon size="250px" color={colors.accent}>
          <IconParty />
        </Icon>
        <h2>Services</h2>
      </Container>
      {data.services.connectEnabled && <Connect />}
    </Layout>
  )
}

export default Services

// const IconServices = styled(IconParty)`
//   width: 250px;
// `

export const query = graphql`
  query ServicesQuery {
    services: datoCmsService {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      # heroImage {
      #   fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
      #     ...GatsbyDatoCmsFluid
      #   }
      #   alt
      # }
      heading
      slug
      connectEnabled
    }
    # events: allDatoCmsEvent(sort: { fields: position }) {
    #   edges {
    #     event: node {
    #       title
    #       slug
    #       venue
    #       location
    #       eventType
    #       # photographer
    #       # excerpt
    #       # excerptNode {
    #       #   childMarkdownRemark {
    #       #     html
    #       #   }
    #       # }
    #       coverImage {
    #         originalId
    #         fluid(
    #           maxWidth: 420
    #           maxHeight: 420
    #           imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "420", h: "420" }
    #         ) {
    #           ...GatsbyDatoCmsFluid
    #         }
    #         alt
    #       }
    #     }
    #   }
    # }
    footer: datoCmsFooter {
      links {
        id
        icon {
          originalId
          alt
          url
        }
        title
        linkText
        linkUrl
      }
      serving
      copyright
    }
  }
`
