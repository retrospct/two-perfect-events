import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo, Header } from 'components/common'
import { HeroImage, ImageText, TextImage, Quote, Featured, Instagram } from 'components/blocks'
import { Hero, Contact } from 'components/landing'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

const Home = ({ data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.home.seoMetaTags} />
      <Hero heading={data.home.heading} subheading={data.home.subtitle} />
      {data.home.homeBlock.map(block => (
        <section key={block.id}>
          {block.model.apiKey === 'hero_image' && <HeroImage block={block} />}
          {block.model.apiKey === 'image_text' && <ImageText block={block} />}
          {block.model.apiKey === 'text_image' && <TextImage block={block} />}
          {block.model.apiKey === 'quote' && <Quote block={block} />}
          {block.model.apiKey === 'featured' && <Featured block={block} />}
          {block.model.apiKey === 'instagram' && <Instagram block={block} />}
        </section>
      ))}
      <Contact />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
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
        ... on DatoCmsInstagram {
          model {
            apiKey
          }
          id
          heading
          socialLink {
            text
            username
            url
          }
          instaGallery {
            originalId
            fluid(
              maxWidth: 320
              maxHeight: 320
              imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
