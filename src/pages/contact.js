import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import { useTheme } from 'context/themeContext'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Container, ContactPageForm, Icon, IconSquiggly } from 'components/common'

const Contact = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  const { colors } = useTheme()
  return (
    <Layout location={location} footer={data.footer}>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.contact.seoMetaTags} />
      <Wrapper as={Container}>
        <ContactUs>
          {data.contact.squigglyIcon && (
            <Spotlight>
              <Icon color={colors.accent}>
                <IconSquiggly />
              </Icon>
            </Spotlight>
          )}
          {data?.contact?.heading && (
            <Heading>
              <h3>{data?.contact?.heading?.toUpperCase()}</h3>
            </Heading>
          )}
          <ContactPageForm config={data.contact} />
        </ContactUs>
      </Wrapper>
    </Layout>
  )
}
// <Spotlight>
//   <img src={arrowSquiggly} alt="Arrow pointing towards let's get this party started" />
// </Spotlight>

export default Contact

export const Fluid = styled.div`
  width: 100%;
  /* background: var(--accent-color); */
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  /* @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    grid-template-columns: 1fr;
  } */
`

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  /* justify-content: center; */
  align-items: center;
  /* @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    grid-template-columns: 1fr;
  } */
`

export const ContactUs = styled.div`
  position: relative;
  padding: 6rem 6rem 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  /* color: var(--textLight-color); */
  width: 100%;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    padding-right: unset;
    width: 100%;
    padding: 6rem 1.5rem 4rem;
  }
`
export const Spotlight = styled.div`
  height: 222px;
  width: 111px;
  position: absolute;
  top: 0;
  right: 1.5rem;
  /* color: var(--textLight-color); */
  & img {
    height: 80%;
    width: 111px;
    transform: scale(-1, 1) rotate(-25deg);
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    margin-top: -2rem;
  }
`

export const Heading = styled.div`
  text-align: left;
  h3 {
    /* color: var(--textLight-color); */
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`

export const ImgBlock = styled.div`
  display: none;
  height: 100%;
  min-height: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    display: block;
  }
  & .gatsby-image-wrapper {
    min-height: 100%;
    max-width: 100%;
  }
`

export const query = graphql`
  query ContactQuery {
    contact: datoCmsContact {
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

// name_label
//       email_label
//       phone_label
//       event_date_label
//       referral_label
//       referral_options {
//         referral_source
//       }
//       referral_detail_enabled
//       referral_detail_label
//       additional_information_label
//       name_required
//       email_required
//       phone_required
//       event_date_required
//       referral_required
//       referral_detail_required
//       additional_information_required
