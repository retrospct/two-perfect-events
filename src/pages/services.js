import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header } from 'components/common'

const Services = ({ data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout footer={data.footer}>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.services.seoMetaTags} />
      {/* <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.about.title}</h1>
        <p className="sheet__lead">{data.about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={data.about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article> */}
      <h2>Services</h2>
    </Layout>
  )
}

export default Services

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
