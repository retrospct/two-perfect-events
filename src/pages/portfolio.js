import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import {
  Layout,
  Seo,
  Navigation,
  Heading,
  Container,
  Connect,
  Fluid,
  ImgFluid,
  Gallery,
  ImgOverlay,
} from 'components/common'

const Portfolio = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.portfolio.seoMetaTags} />
      <Fluid>
        <ImgFluid style={{maxWidth: 1920, margin: '0 auto'}} fluid={data.portfolio.heroImage.fluid} alt={data.portfolio.heroImage.alt} />
      </Fluid>
      <Wrapper>
        <Content>
          <Heading>
            <h3>{data.portfolio.heading}</h3>
          </Heading>
          {/* <h4>{data.portfolio.filters}</h4> */}
        </Content>
      </Wrapper>
      <Wrapper style={{ paddingBottom: '4rem' }}>
        <Gallery>
          {data.events.edges.map(({ event }) => (
            <ImgLink key={event.slug} to={`/portfolio/${event.slug}`}>
              <ImgOverlay>
                <div>
                  {event.venueNode && (
                    <h4 dangerouslySetInnerHTML={{ __html: event?.venueNode?.childMarkdownRemark?.excerpt }} />
                  )}
                  {event.location && <h5>{event.location}</h5>}
                </div>
              </ImgOverlay>
              <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
            </ImgLink>
          ))}
        </Gallery>
      </Wrapper>
      {data.portfolio.connectEnabled && <Connect />}
    </Layout>
  )
}

export default Portfolio

const Wrapper = styled(Container)`
  padding: 4rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`
const Content = styled.div`
  width: 100%;
  padding: 4rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  /* transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1); */
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`

export const query = graphql`
  query PortfolioQuery {
    portfolio: datoCmsPortfolio {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroImage {
        fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      heading
      filters
      connectEnabled
    }
    events: allDatoCmsEvent(sort: { fields: position }) {
      edges {
        event: node {
          title
          slug
          venueNode {
            childMarkdownRemark {
              excerpt
            }
          }
          location
          eventType
          coverImage {
            originalId
            fluid(
              maxWidth: 420
              maxHeight: 420
              imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "420", h: "420" }
            ) {
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
