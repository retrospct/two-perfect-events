import React from 'react'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Layout, Seo, Header } from 'components/common'
import { HeroImage, ImageText, TextImage, Quote, Featured } from 'components/blocks'
import { Hero, Contact } from 'components/landing'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

const Home = ({ data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout>
      <Header />
      {/* <HelmetDatoCms seo={data.home.seoMetaTags} favicon={data.datoCmsSite.faviconMetaTags} /> */}
      <Seo siteSeo={siteSeo} pageSeo={data.home.seoMetaTags} />
      <Hero heading={data.home.heading} subheading={data.home.subtitle} />
      {/* <Intro image={data.home.introPhoto} textNode={data.home.introTextNode.childMarkdownRemark.html} /> */}
      {data.home.homeBlock.map(block => (
        <section key={block.id}>
          {block.model.apiKey === 'hero_image' && <HeroImage block={block} />}
          {block.model.apiKey === 'image_text' && <ImageText block={block} />}
          {block.model.apiKey === 'text_image' && <TextImage block={block} />}
          {block.model.apiKey === 'quote' && <Quote block={block} />}
          {block.model.apiKey === 'featured' && <Featured block={block} />}
        </section>
      ))}
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Contact />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
    # siteSeo: datoCmsSite {
    #   domain
    #   globalSeo {
    #     siteName
    #     titleSuffix
    #     twitterAccount
    #     facebookPageUrl
    #     fallbackSeo {
    #       title
    #       description
    #       image {
    #         url
    #       }
    #       twitterCard
    #     }
    #   }
    #   faviconMetaTags {
    #     ...GatsbyDatoCmsFaviconMetaTags
    #   }
    # }
    home: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      subtitle
      copyright
      homeBlock {
        ... on DatoCmsImageText {
          model {
            apiKey
          }
          id
          text
          # textNode {
          #   childMarkdownRemark {
          #     html
          #   }
          # }
          ctaButton {
            text
            path
          }
          ctaButtonText
          links {
            id
            text
            path
          }
          image {
            fluid(maxHeight: 1064, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsTextImage {
          model {
            apiKey
          }
          id
          text
          # textNode {
          #   childMarkdownRemark {
          #     html
          #   }
          # }
          image {
            fluid(maxWidth: 1064, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsHeroImage {
          model {
            apiKey
          }
          id
          text
          heading
          image {
            fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            # fixed(height: 500, imgixParams: { fm: "jpg", auto: "compress" }) {
            #   ...GatsbyDatoCmsFixed
            # }
          }
        }
        ... on DatoCmsQuote {
          model {
            apiKey
          }
          id
          quote
          author
        }
        ... on DatoCmsFeatured {
          model {
            apiKey
          }
          id
          heading
          badges {
            originalId
            fixed(width: 180, height: 180, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFixed
            }
          }
          moreLink {
            text
            path
          }
        }
      }
    }
  }
`
