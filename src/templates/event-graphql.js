import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { LinkBase, Icon, IconArrow } from 'components/common'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Container, Footer, Connect } from 'components/common'

const Event = ({ location, data }) => {
  const { event, footer } = data
  const siteSeo = useSiteDatoMeta()

  return (
    <Layout location={location}>
      <Seo siteSeo={siteSeo} pageSeo={event.seoMetaTags} />
      <Header />
      <Wrapper>
        <LinkBack to="/portfolio">
          <Icon size="18px">
            <IconArrowLeft />
          </Icon>{' '}
          Back to Porfolio
        </LinkBack>
        <Content>
          <Heading>{event.title}</Heading>
          <MetaOneLiner>{event.oneLiner}</MetaOneLiner>
          <Meta>
            <MetaItem>
              <h2>Location</h2>
              <h3>{event.venue}</h3>
              <div dangerouslySetInnerHTML={{ __html: event?.venueNode?.childMarkdownRemark?.html }} />
              <h3>{event.location}</h3>
            </MetaItem>
            <MetaItem>
              <h2>Event Type</h2>
              <h3>{event.eventType}</h3>
            </MetaItem>
            <MetaItem>
              <h2>Photographer</h2>
              <h3>{event.photographer}</h3>
            </MetaItem>
          </Meta>
          <Meta>
            <MetaItem>
              <h2>{event?.couple?.toUpperCase() || 'Event'}</h2>
              <h3>{event.venue}</h3>
              <div dangerouslySetInnerHTML={{ __html: event?.venueNode?.childMarkdownRemark?.html }} />
              <h3>{event.location}</h3>
              <h3>{event.eventType}</h3>
            </MetaItem>
            <MetaItem>
              <h2>Vendors</h2>
              <div dangerouslySetInnerHTML={{ __html: event?.vendorsNode?.childMarkdownRemark?.html }} />
            </MetaItem>
          </Meta>
        </Content>
      </Wrapper>
      <Container>
        <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
      </Container>
      <Wrapper>
        <Gallery>
          {event.gallery.map((img) => (
            <Img key={img.originalId} fluid={img.fluid} alt={img.alt} />
          ))}
        </Gallery>
      </Wrapper>
      <Connect />
      <Footer links={footer.links} serving={footer.serving} copyright={footer.copyright} />
    </Layout>
  )
}

export default Event

const Wrapper = styled(Container)`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Content = styled.header`
  width: 100%;
  padding: 4rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Meta = styled.div`
  width: 100%;
  padding: 3rem 0 1rem;
  display: flex;
  /* justify-content: space-between; */
  /* @media (max-width: ${({ theme }) => theme.mq.xl}px) {
    width: 90%;
  } */
  @media (max-width: ${({ theme }) => theme.mq.md}px) {
    width: 100%;
    flex-direction: column;
  }
`
const MetaOneLiner = styled.div`
  font-family: var(--sans-font);
  font-size: 1.15rem;
  color: var(--text-color);
  font-weight: 300;
  /* margin-bottom: 0.5rem; */
`
const MetaItem = styled.div`
  padding: 1rem 5rem 2rem 0;
  & h2 {
    font-family: var(--serif-font);
    font-size: 1.5rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  & ul,
  & ol {
    margin-left: 0;
    list-style: none;
    margin-bottom: 0.5rem;
  }
  & p,
  & a,
  & li,
  & h3 {
    font-family: var(--sans-font);
    font-size: 1.15rem;
    color: var(--text-color);
    font-weight: 300;
    margin-bottom: 0.5rem;
  }
  & a {
    &:hover {
      /* text-decoration: underline; */
      color: var(--primary-color);
    }
  }
  @media (max-width: ${({ theme }) => theme.mq.xl}px) {
    padding-right: 2.5rem;
  }
  @media (max-width: ${({ theme }) => theme.mq.md}px) {
    padding-right: 0;
  }
`
const IconArrowLeft = styled(IconArrow)`
  color: var(--text-color);
  transform: rotate(180deg);
  margin-right: 5px;
`
const LinkBack = styled(LinkBase)`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 100;
  text-transform: uppercase;
  padding-bottom: 20px;
  align-self: flex-start;
  &:hover {
    text-decoration: underline;
  }
`
const Heading = styled.h1`
  font-family: var(--serif-font);
  font-weight: 300;
  font-size: 2.87rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`

const Gallery = styled.div`
  width: 100%;
  max-width: calc(420px * 3 + 40px);
  margin: 1rem 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  justify-items: center;
  justify-content: space-around;
  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 420px;
    max-height: 420px;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    max-width: calc(420px * 2 + 20px);
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 96%;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  }
`

export const query = graphql`
  query EventQuery($slug: String!) {
    event: datoCmsEvent(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      couple
      venueNode {
        childMarkdownRemark {
          html
        }
      }
      location
      eventType
      oneLiner
      photographer
      vendorsNode {
        childMarkdownRemark {
          html
        }
      }
      vendorList {
        # unused currently
        id
        originalId
        name
        referralLink
        website
        # logo
      }
      coverImage {
        originalId
        fluid(
          maxHeight: 1440
          imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "420", h: "420" }
        ) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      gallery {
        originalId
        fluid(maxHeight: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      eventGallery {
        ... on DatoCmsImageOneColumn {
          model {
            apiKey
          }
          id
          imageFluid {
            fluid(maxHeight: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImageTwoColumn {
          model {
            apiKey
          }
          id
          imageLeft {
            fluid(maxHeight: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          imageRight {
            fluid(maxHeight: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
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
