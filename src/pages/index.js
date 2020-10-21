import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

// import { useTheme } from 'context/themeContext'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { useInstaLatest } from 'hooks/useInstaLatest'

import { Layout, Seo, Header, Footer } from 'components/common'
import { HomeBlock } from 'components/blocks/home'
import { CreditsBlock } from 'components/blocks/credits'
import { Hero } from 'components/landing'

const Home = ({ data }) => {
  const siteSeo = useSiteDatoMeta()
  const instaLatest = useInstaLatest()
  // const { prevTheme, currentTheme, toggleTheme } = useTheme()
  // useEffect(() => {
    // if (currentTheme === 'superDark') toggleTheme(prevTheme)
  // }, [])
  // console.log('data.nav: ', data.nav)
  return (
    <Layout>
      <Header />
      {/* {data.nav.edges.map((link) => console.log('link.path: ', link.path))} */}
      <Seo siteSeo={siteSeo} pageSeo={data.home.seoMetaTags} />
      <Hero heading={data.home.heading} subheading={data.home.subtitle} />
      <HomeBlock homeBlock={data.home.homeBlock} instaLatest={instaLatest} />
      <CreditsBlock heading="PHOTO CREDITS (WIP)" creditsBlock={data.home.creditsBlock} />
      <Footer links={data.footer.links} serving={data.footer.serving} copyright={data.footer.copyright} />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
    nav: allDatoCmsNavLink(sort: { fields: position }) {
      edges {
        node {
          text
          path
          position
          id
          originalId
        }
      }
    }
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
            title
            linkText
            linkUrl
            username
          }
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
        ... on DatoCmsCreditSection {
          model {
            apiKey
          }
          id
          heading
        }
        ... on DatoCmsCreditItem {
          model {
            apiKey
          }
          id
          location
          credits {
            id
            name
            referralLink
            website
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
