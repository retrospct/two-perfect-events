import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
// import Img from 'gatsby-image'
import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'
// import { Fluid, Wrapper, ContactBlock, Spotlight } from './styles'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Container, ContactPageForm } from 'components/common'

const Contact = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  // const {
  //   name,
  //   nameRequired,
  //   email,
  //   emailRequired,
  //   phone,
  //   phoneRequired,
  //   eventDate,
  //   eventDateRequired,
  //   additionalInfo,
  //   additionalInfoRequired,
  // } = block
  return (
    <Layout location={location} footer={data.footer}>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.contact.seoMetaTags} />
      {/* <Fluid id="contact"> */}
      <Wrapper as={Container}>
        <ContactBlock>
          {data.contact.squigglyIcon && (
            <Spotlight>
              <img src={arrowSquiggly} alt="Arrow pointing towards let's get this party started" />
            </Spotlight>
          )}
          {data.contact.heading && (
            <Heading>
              <h3>{data.contact.heading}</h3>
            </Heading>
          )}
          <ContactPageForm
            config={{
              name: 'Name',
              nameRequired: true,
              email: 'Email',
              emailRequired: true,
              phone: 'Phone',
              phoneRequired: true,
              eventDate: 'Event Date',
              eventDateRequired: false,
              additionalInfo: 'Additional Information',
              additionalInfoRequired: false,
            }}
          />
        </ContactBlock>
        {/* <ImgBlock>
        <Img fixed={image.fixed} alt={image.alt} />
      </ImgBlock> */}
      </Wrapper>
    </Layout>
  )
}

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

export const ContactBlock = styled.div`
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
  /* p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
  } */
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
      heading
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
