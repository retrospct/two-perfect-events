import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import {
  Layout,
  Seo,
  Header,
  Container,
  Connect,
  Fluid,
  ImgFluid,
  Gallery,
  ImgOverlay,
  ButtonContrast,
} from 'components/common'
import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'
import iconPartyHat from 'assets/illustrations/icon-party-hat.svg'

const Portfolio = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.portfolio.seoMetaTags} />
      <Fluid>
        <ImgFluid fluid={data.portfolio.heroImage.fluid} alt={data.portfolio.heroImage.alt} />
      </Fluid>
      <Wrapper>
        <Content>
          <h3>{data.portfolio.heading}</h3>
          <h4>{data.portfolio.filters}</h4>
        </Content>
      </Wrapper>
      <Wrapper style={{ paddingBottom: '4rem' }}>
        <Gallery>
          {data.events.edges.map(({ event }) => (
            <ImgLink key={event.slug} to={`/portfolio/${event.slug}`}>
              <ImgOverlay>
                <div>
                  {event.venue && <h4>{event.venue}</h4>}
                  {event.location && <h5>{event.location}</h5>}
                </div>
              </ImgOverlay>
              <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
            </ImgLink>
          ))}
        </Gallery>
      </Wrapper>
      <Connect>
        <hr />
        <Spotlight>
          <img src={arrowSquiggly} alt="Squiggly arrow pointing towards a Let's Connect button." />
        </Spotlight>
        <ButtonContrast onClick={() => navigate('/contact')}>{data.connect.title}</ButtonContrast>
        <SpotlightBottom>
          <img src={iconPartyHat} alt="Hand drawn line illustration of a party hat." />
        </SpotlightBottom>
        <hr className="hr-connect-second" />
      </Connect>
    </Layout>
  )
}

export default Portfolio

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

const Spotlight = styled.div`
  height: 222px;
  width: 111px;
  position: absolute;
  top: 0;
  right: 20%;
  color: var(--textLight-color);
  & img {
    height: 80%;
    width: 111px;
    transform: scale(-1, 1) rotate(-25deg) translateY(-2rem);
  }
`

const SpotlightBottom = styled(Spotlight)`
  top: unset;
  left: 25%;
  bottom: 0;
  transform: rotate(260deg) translateX(-1.87rem);
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    transform: rotate(260deg) translateX(-1.87rem);
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
    }
    events: allDatoCmsEvent(sort: { fields: position }) {
      edges {
        event: node {
          title
          slug
          venue
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
    connect: datoCmsConnect {
      title
      contactPage {
        slug
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
