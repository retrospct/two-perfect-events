import React from 'react'
import { graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { Layout, Seo, Navigation, Connect, HeroImage, NavSpacer } from 'components/common'
// import { WeddingsBlock } from 'components/blocks/services'

const PrivateParties = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer} nonavigation>
      {/* <Helmet>
        <script async src="../../scripts/yelp.js" type="application/javascript" />
      </Helmet> */}
      <Navigation location={location} />
      <Seo siteSeo={siteSeo} pageSeo={data.private.seoMetaTags} />
      <NavSpacer>
        <HeroImage title="PRIVATE PARTIES" subtitle={data.private.subtitle} image={data.private.heroImage} />
        {/* <HeroImage title={data.private.title} subtitle={data.private.subtitle} image={data.private.heroImage} /> */}
        {/* <WeddingsBlock blocks={data.private.blocks} /> */}
        <HeroImage image={data.private.heroBottom} />
        {data.private.connectEnabled && <Connect />}
      </NavSpacer>
    </Layout>
  )
}

export default PrivateParties

export const query = graphql`
  query PrivatePartiesQuery {
    private: datoCmsWedding {
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
      connectEnabled
      #   blocks: weddingsBlock {
      #     ... on DatoCmsText {
      #       model {
      #         apiKey
      #       }
      #       id
      #       statement
      #     }
      #     ... on DatoCmsCtaButton {
      #       model {
      #         apiKey
      #       }
      #       id
      #       linkText
      #       linkTo
      #     }
      #     ... on DatoCmsFaqItem {
      #       model {
      #         apiKey
      #       }
      #       id
      #       question
      #       answer
      #     }
      #     ... on DatoCmsDivider {
      #       model {
      #         apiKey
      #       }
      #       id
      #       enabled
      #     }
      #     ... on DatoCmsHighlight {
      #       model {
      #         apiKey
      #       }
      #       id
      #       features {
      #         id
      #         badge {
      #           alt
      #           fixed(
      #             width: 200
      #             height: 200
      #             imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
      #           ) {
      #             ...GatsbyDatoCmsFixed
      #           }
      #         }
      #         linkTo
      #         accoladeType
      #       }
      #     }
      #     ... on DatoCmsSection {
      #       model {
      #         apiKey
      #       }
      #       id
      #       accentTop
      #       heading
      #       description
      #       centered
      #       accentBottom
      #       golden
      #       ctaText
      #       ctaLinkTo
      #       externalLink
      #     }
      #     ... on DatoCmsProcessCard {
      #       model {
      #         apiKey
      #       }
      #       id
      #       title
      #       content
      #       image {
      #         alt
      #         fluid(maxWidth: 300, maxHeight: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
      #           ...GatsbyDatoCmsFluid
      #         }
      #       }
      #       lastCard
      #     }
      #     ... on DatoCmsServiceBlock {
      #       model {
      #         apiKey
      #       }
      #       id
      #       heading
      #       description
      #       cards {
      #         id
      #         image {
      #           alt
      #           fixed(
      #             width: 320
      #             height: 320
      #             imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
      #           ) {
      #             ...GatsbyDatoCmsFixed
      #           }
      #         }
      #         title
      #         body
      #         linkTo
      #       }
      #     }
      #     ... on DatoCmsSliderBlock {
      #       model {
      #         apiKey
      #       }
      #       id
      #       slides {
      #         originalId
      #         alt
      #         fluid(maxHeight: 1080, imgixParams: { fm: "png", auto: "compress" }) {
      #           ...GatsbyDatoCmsFluid
      #         }
      #       }
      #     }
      #     ... on DatoCmsSpacer {
      #       model {
      #         apiKey
      #       }
      #       id
      #       spacerSize
      #     }
      #     ... on DatoCmsYelpReview {
      #       model {
      #         apiKey
      #       }
      #       id
      #       embedEnabled
      #       avatar {
      #         alt
      #         fluid(
      #           maxWidth: 220
      #           # height: 320
      #           imgixParams: { fm: "jpg", auto: "compress" }
      #         ) {
      #           ...GatsbyDatoCmsSizes
      #         }
      #       }
      #       reviewerName
      #       rating
      #       reviewExcerpt
      #       linkText
      #       yelpLink
      #       yelpBadge {
      #         alt
      #         fixed(
      #           width: 200
      #           height: 200
      #           imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
      #         ) {
      #           ...GatsbyDatoCmsFixed
      #         }
      #       }
      #     }
      #   }
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
