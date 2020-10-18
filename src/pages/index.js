import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo, Header, Footer } from 'components/common'
import { Contact, HeroImage, ImageText, TextImage, Quote, Featured, Instagram, HeadingDescription } from 'components/blocks'
import { Hero, PhotoCredits } from 'components/landing'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { useInstaLatest } from 'hooks/useInstaLatest'

const Home = ({ data }) => {
  const siteSeo = useSiteDatoMeta()
  const instaLatest = useInstaLatest()
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
          {block.model.apiKey === 'heading_description' && <HeadingDescription block={block} />}
          {block.model.apiKey === 'quote' && <Quote block={block} />}
          {block.model.apiKey === 'featured' && <Featured block={block} />}
          {block.model.apiKey === 'instagram' && <Instagram block={block} latest={instaLatest} />}
          {block.model.apiKey === 'contact_form' && <Contact block={block} />}
        </section>
      ))}
      <PhotoCredits heading="PHOTO CREDITS (WIP)" creditsBlock={data.home.creditsBlock} />
      <Footer links={data.footer.links} serving={data.footer.serving} copyright={data.footer.copyright} />
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
          image {
            fluid(maxWidth: 1064, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        ... on DatoCmsHeadingDescription {
          model {
            apiKey
          }
          id
          accentTop
          heading
          description
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
          accentBottom
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
          # instaGallery {
          #   originalId
          #   fluid(
          #     maxWidth: 320
          #     maxHeight: 320
          #     imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
          #   ) {
          #     ...GatsbyDatoCmsFluid
          #   }
          # }
        }
        ... on DatoCmsContactForm {
          model {
            apiKey
          }
          id
          squigglyIcon
          heading
          name
          nameRequired
          email
          emailRequired
          phone
          phoneRequired
          eventDate
          eventDateRequired
          additionalInfo
          additionalInfoRequired
        }
      }
      creditsBlock {
        ... on DatoCmsCreditTitle {
          model {
            apiKey
          }
          id
          title
        }
        ... on DatoCmsCreditItem {
          model {
            apiKey
          }
          id
          location
          vendorName
          vendorLink
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
          # fixed(width: 36, height: 36, imgixParams: { fm: "png", auto: "compress" }) {
          #   ...GatsbyDatoCmsFixed
          # }
        }
        title
        linkText
        linkUrl
      }
      serving
      copyright
      # footerLogo {
      #   fixed(width: 180, height: 180, imgixParams: { fm: "svg", auto: "compress" }) {
      #         ...GatsbyDatoCmsFixed
      #       }
      # }
    }
  }
`
