import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { Layout, Seo, Navigation, Connect, HeroImage, NavSpacer } from 'components/common'
import { ServicesBlock } from 'components/blocks/services'

const Services = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer} nonavigation>
      <Helmet>
        <script src="../../scripts/yelp.js" type="application/javascript" />
      </Helmet>
      <Navigation location={location} />
      <Seo siteSeo={siteSeo} pageSeo={data.services.seoMetaTags} />
      <NavSpacer>
        <HeroImage title={data.services.title} subtitle={data.services.subtitle} image={data.services.heroImage} />
        <ServicesBlock blocks={data.services.blocks} />
        <HeroImage image={data.services.heroBottom} />
        {data.services.connectEnabled && <Connect />}
      </NavSpacer>
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
      title
      subtitle
      heroImage {
        alt
        gatsbyImageData(width: 1920, placeholder: BLURRED, imgixParams: { auto: "compress" })
        # fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
        #   ...GatsbyDatoCmsFluid
        # }
      }
      heroBottom {
        alt
        gatsbyImageData(width: 1920, placeholder: BLURRED, imgixParams: { auto: "compress" })
        # fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
        #   ...GatsbyDatoCmsFluid
        # }
      }
      connectEnabled
      blocks: servicesBlock {
        ... on DatoCmsText {
          model {
            apiKey
          }
          id
          statement
        }
        ... on DatoCmsCtaButton {
          model {
            apiKey
          }
          id
          linkText
          linkTo
        }
        ... on DatoCmsFaqItem {
          model {
            apiKey
          }
          id
          question
          answer
        }
        ... on DatoCmsDivider {
          model {
            apiKey
          }
          id
          enabled
        }
        ... on DatoCmsHighlight {
          model {
            apiKey
          }
          id
          features {
            id
            badge {
              alt
              gatsbyImageData(
                width: 200
                height: 200
                placeholder: BLURRED
                imgixParams: { auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
              )
              # fixed(
              #   width: 200
              #   height: 200
              #   imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
              # ) {
              #   ...GatsbyDatoCmsFixed
              # }
            }
            linkTo
            accoladeType
          }
        }
        ... on DatoCmsSection {
          model {
            apiKey
          }
          id
          accentTop
          heading
          description
          centered
          accentBottom
          golden
          ctaText
          ctaLinkTo
          externalLink
        }
        ... on DatoCmsProcessCard {
          model {
            apiKey
          }
          id
          title
          content
          image {
            alt
            gatsbyImageData(width: 300, height: 500, placeholder: BLURRED, imgixParams: { auto: "compress" })
            # fluid(maxWidth: 300, maxHeight: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
            #   ...GatsbyDatoCmsFluid
            # }
          }
          lastCard
        }
        ... on DatoCmsServiceBlock {
          model {
            apiKey
          }
          id
          heading
          description
          cards {
            id
            image {
              alt
              gatsbyImageData(
                width: 320
                height: 320
                placeholder: BLURRED
                imgixParams: { auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
              )
              # fixed(
              #   width: 320
              #   height: 320
              #   imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
              # ) {
              #   ...GatsbyDatoCmsFixed
              # }
            }
            title
            body
            linkTo
          }
        }
        ... on DatoCmsSliderBlock {
          model {
            apiKey
          }
          id
          slides {
            originalId
            alt
            gatsbyImageData(height: 1080, placeholder: BLURRED, imgixParams: { auto: "compress" })
            # fluid(maxHeight: 1080, imgixParams: { fm: "png", auto: "compress" }) {
            #   ...GatsbyDatoCmsFluid
            # }
          }
        }
        ... on DatoCmsSpacer {
          model {
            apiKey
          }
          id
          spacerSize
        }
        ... on DatoCmsYelpReview {
          model {
            apiKey
          }
          id
          embedEnabled
          avatar {
            alt
            gatsbyImageData(width: 220, placeholder: BLURRED, imgixParams: { auto: "compress" })
            # gatsbyImageData(width: 220, placeholder: BLURRED, imgixParams: { auto: "compress" })
            # fluid(
            #   maxWidth: 220
            #   imgixParams: { fm: "jpg", auto: "compress" }
            # ) {
            #   ...GatsbyDatoCmsSizes
            # }
          }
          reviewerName
          rating
          reviewExcerpt
          linkText
          yelpLink
          yelpBadge {
            alt
            gatsbyImageData(
              width: 200
              height: 200
              placeholder: BLURRED
              imgixParams: { auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
            )
            # fixed(
            #   width: 200
            #   height: 200
            #   imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
            # ) {
            #   ...GatsbyDatoCmsFixed
            # }
          }
        }
      }
    }
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
