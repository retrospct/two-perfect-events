import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { Layout, Seo, Navigation, Connect, HeroImage } from 'components/common'
import { WeddingsBlock } from 'components/blocks/weddings'

const Weddings = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Helmet>
        <script src="../../scripts/yelp.js" />
      </Helmet>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.weddings.seoMetaTags} />
      <div aria-hidden style={{ height: 100, width: '100%', background: 'transparent' }} />
      <HeroImage title={data.weddings.title} subtitle={data.weddings.subtitle} image={data.weddings.heroImage} />
      <WeddingsBlock blocks={data.weddings.blocks} />
      {data.weddings.connectEnabled && <Connect />}
      <HeroImage image={data.weddings.heroBottom} />
    </Layout>
  )
}

export default Weddings

export const query = graphql`
  query WeddingsQuery {
    weddings: datoCmsWedding {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      heroImage {
        fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      heroBottom {
        fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      blocks: weddingsBlock {
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
        ... on DatoCmsTestimonial {
          model {
            apiKey
          }
          id
          title
          quote
          author
          golden
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
              fixed(
                width: 200
                height: 200
                imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
              ) {
                ...GatsbyDatoCmsFixed
              }
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
            fluid(maxWidth: 300, maxHeight: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
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
              fixed(
                width: 360
                height: 360
                imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "360", h: "360" }
              ) {
                ...GatsbyDatoCmsFixed
              }
            }
            title
            body
          }
        }
        ... on DatoCmsYelpReview {
          model {
            apiKey
          }
          id
          embedEnabled
          avatar {
            alt
            fluid(
              maxWidth: 220
              # height: 320
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
          reviewerName
          rating
          reviewExcerpt
          linkText
          yelpLink
          yelpBadge {
            alt
            fixed(
              width: 200
              height: 200
              imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
            ) {
              ...GatsbyDatoCmsFixed
            }
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
