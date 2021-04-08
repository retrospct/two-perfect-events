import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { useTheme } from 'context/themeContext'
import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Container, ContactForm, Icon, IconSquiggly, Divider, NavSpacer } from 'components/common'

const Contact = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  const { colors } = useTheme()
  return (
    <Layout location={location} footer={data.footer}>
      <Seo siteSeo={siteSeo} pageSeo={data.contact.seoMetaTags} />
      {/* <div aria-hidden style={{ height: 100, width: '100%', background: 'transparent' }} /> */}
      <NavSpacer>
        <Content>
          <ContactUs>
            {/* {data.contactForm.squigglyIcon && (
            <Spotlight>
              <Icon color={colors.accent}>
                <IconSquiggly />
              </Icon>
            </Spotlight>
          )} */}
            {data?.contact?.heading && (
              <Heading>
                <h3>{data.contact.heading}</h3>
              </Heading>
            )}
            <ContactForm config={data.contactForm} formName="contact-page" />
          </ContactUs>
        </Content>
        {data?.contact?.contactList && (
          <ContentInline>
            {data.contact.contactList.map((item) => (
              <ContactsList key={item.id}>
                <img src={item.icon.url} alt={item.icon.alt} />
                {item.title === 'ADDRESS' && item.address && <div dangerouslySetInnerHTML={{ __html: item.address }} />}
                {item.title !== 'ADDRESS' && <p>{item.linkText}</p>}
              </ContactsList>
            ))}
          </ContentInline>
        )}
        <Content>
          <Divider />
        </Content>
        <FaqContent>
          <Heading style={{ alignSelf: 'center' }}>
            <h3>{data?.contact?.faqTitle}</h3>
          </Heading>
          {data.contact.faq.map((item) => (
            <FaqBlock key={item.id}>
              {item.model.apiKey === 'faq_item' && (
                <>
                  <h4>{item.question}</h4>
                  <FaqItem dangerouslySetInnerHTML={{ __html: item.answer }} />
                </>
              )}
            </FaqBlock>
          ))}
        </FaqContent>
        <ImgFluid>
          <GatsbyImage image={data.contact.accentImage.gatsbyImageData} alt={data.contact.accentImage.alt} />
        </ImgFluid>
      </NavSpacer>
    </Layout>
  )
}
// <Spotlight>
//   <img src={arrowSquiggly} alt="Arrow pointing towards let's get this party started" />
// </Spotlight>

export default Contact

const Content = styled(Container)`
  width: 100%;
  padding: 4rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ContentInline = styled(Container)`
  width: 100%;
  /* padding: 0 0 4rem; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
const ContactsList = styled.div`
  text-align: left;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  & img {
    margin: 0 14px 0 0;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    & img {
      margin: 0 0 14px;
    }
  }
`
// const Fluid = styled.div`
//   width: 100%;
//   /* background: var(--accent-color); */
//   display: grid;
//   grid-template-columns: 1fr;
//   justify-content: center;
//   align-items: center;
//   /* @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
//     grid-template-columns: 1fr;
//   } */
// `

const Wrapper = styled(Container)`
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

const ContactUs = styled.div`
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
// const Spotlight = styled.div`
//   height: 222px;
//   width: 111px;
//   position: absolute;
//   top: 0;
//   right: 1.5rem;
//   /* color: var(--textLight-color); */
//   & img {
//     height: 80%;
//     width: 111px;
//     transform: scale(-1, 1) rotate(-25deg);
//   }
//   @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
//     margin-top: -2rem;
//   }
// `

const Heading = styled.div`
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
const FaqContent = styled(Container)`
  width: 100%;
  padding: 4rem 0.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`
const FaqBlock = styled.div`
  margin-bottom: 1rem;
  max-width: 100%;
  & h4 {
    font-family: var(--serif-font);
    font-size: 1.4rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
`
const FaqItem = styled.div`
  & p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.3;
  }
`

const ImgFluid = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  max-height: 800px;
  &:before {
    content: '';
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  & .gatsby-image-wrapper {
    min-height: 420px;
    max-height: 800px;
  }
  & img {
    min-height: 420px;
    max-height: 800px;
  }
`

// const ImgBlock = styled.div`
//   display: none;
//   height: 100%;
//   min-height: 100%;
//   max-width: 100%;
//   overflow: hidden;
//   margin: 0 auto;
//   @media (min-width: ${({ theme }) => `${theme.mq.lg}px`}) {
//     display: block;
//   }
//   & .gatsby-image-wrapper {
//     min-height: 100%;
//     max-width: 100%;
//   }
// `

export const query = graphql`
  query ContactQuery {
    contact: datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      contactList {
        id
        address
        title
        linkText
        linkUrl
        icon {
          alt
          url
        }
      }
      faqTitle
      faq {
        id
        ... on DatoCmsFaqItem {
          model {
            apiKey
          }
          id
          question
          answer
        }
      }
      accentImage {
        alt
        gatsbyImageData(width: 1920, placeholder: BLURRED, imgixParams: { auto: "compress" })
        # fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
        #   ...GatsbyDatoCmsFluid
        # }
      }
    }
    contactForm: datoCmsContactField {
      # seoMetaTags {
      #   ...GatsbyDatoCmsSeoMetaTags
      # }
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
