import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'

// import { useTheme } from 'context/themeContext'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { Layout, Seo, Navigation, Connect, HeroImage } from 'components/common'
import { WeddingsBlock } from 'components/blocks/weddings'

const Weddings = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  // const { colors } = useTheme()
  return (
    <Layout location={location} footer={data.footer}>
      <Helmet>
        <script src="../../scripts/yelp.js" />
      </Helmet>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.weddings.seoMetaTags} />
      <HeroImage title={data.weddings.title} subtitle={data.weddings.subtitle} image={data.weddings.heroImage} />
      <WeddingsBlock blocks={data.weddings.blocks} />
      {data.weddings.connectEnabled && <Connect />}
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
      blocks: weddingsBlock {
        ... on DatoCmsText {
          id
          model {
            apiKey
          }
          statement
        }
        ... on DatoCmsCtaButton {
          id
          model {
            apiKey
          }
          linkText
          linkTo
        }
        ... on DatoCmsTestimonial {
          id
          model {
            apiKey
          }
          title
          quote
          author
          golden
        }
        ... on DatoCmsDivider {
          id
          enabled
        }
        ... on DatoCmsSection {
          id
          model {
            apiKey
          }
          accentTop
          heading
          description
          accentBottom
          golden
          ctaText
          ctaLinkTo
          externalLink
        }
        ... on DatoCmsProcessCard {
          id
          model {
            apiKey
          }
          title
          content
          image {
            alt
          }
          lastCard
        }
        ... on DatoCmsServiceCard {
          id
          model {
            apiKey
          }
          image {
            alt
          }
          heading
          text
        }
        ... on DatoCmsYelpReview {
          id
          model {
            apiKey
          }
          embedEnabled
          reviewExcerpt
          linkText
          yelpLink
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
