import React from 'react'
import { graphql } from 'gatsby'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { useInstaLatest } from 'hooks/useInstaLatest'

import { Layout, Seo, Navigation, NavSpacer } from 'components/common'
import { HomeBlock } from 'components/blocks/home'
import { CreditsBlock } from 'components/blocks/credits'
import { Hero, ContactSection } from 'components/landing'

const Home = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  const instaLatest = useInstaLatest()
  return (
    <Layout location={location} footer={data.footer}>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.home.seoMetaTags} />
      <NavSpacer>
        <Hero heading={data.home.heading} subheading={data.home.subtitle} />
        <HomeBlock homeBlock={data.home.homeBlock} instaLatest={instaLatest} />
        <ContactSection
          heading="LET’S GET THIS PARTY STARTED!"
          config={data.contact}
          contrast
          formName="contact-home"
        />
        <CreditsBlock heading="PHOTO CREDITS" creditsBlock={data.home.creditsBlock} />
      </NavSpacer>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
    nav: allDatoCmsNavLink(sort: { fields: position }) {
      routes: edges {
        node {
          text
          path
          position
          id
          originalId
          partiallyActive
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
        ... on DatoCmsServicesBlock {
          model {
            apiKey
          }
          id
          moreLink {
            text
            path
          }
          moreLinkText
          services {
            id
            title
            body
            icon {
              url
              alt
            }
            serviceLink {
              slug
            }
            linkTo
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
            title
            linkText
            linkUrl
            username
          }
        }
        # ... on DatoCmsContactForm {
        #   model {
        #     apiKey
        #   }
        #   id
        #   squigglyIcon
        #   heading
        #   name
        #   nameRequired
        #   email
        #   emailRequired
        #   phone
        #   phoneRequired
        #   eventDate
        #   eventDateRequired
        #   additionalInfo
        #   additionalInfoRequired
        # }
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
    contact: datoCmsContactField {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      squigglyIcon
      heading
      nameLabel
      nameRequired
      emailLabel
      emailRequired
      phoneLabel
      phoneRequired
      eventDateLabel
      eventDateRequired
      referralLabel
      referralRequired
      referralOptions {
        referralType
        id
      }
      referralDetailLabel
      referralDetailRequired
      referralDetailEnabled
      referralHelptext
      referralHelptextEnabled
      additionalInformationLabel
      additionalInformationRequired
      slug
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
