import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import {
  Layout,
  Seo,
  Heading,
  Container,
  Connect,
  Fluid,
  ImgFluid,
  Gallery,
  ImgOverlay,
  ButtonSimple,
  NavSpacer,
} from 'components/common'

const Portfolio = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  const { footer, portfolio, events, validators } = data
  const [filteredEvents, setFilteredEvents] = useState(events.edges)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const filterEvents = (type) => {
      let tmpEvents = []
      events.edges.forEach((node) => {
        if (node.event.eventType === type) tmpEvents.push(node)
      })
      return tmpEvents
    }
    filter === 'All' ? setFilteredEvents(events.edges) : setFilteredEvents(filterEvents(filter))
  }, [events.edges, filter])

  return (
    <Layout location={location} footer={footer}>
      <Seo siteSeo={siteSeo} pageSeo={portfolio.seoMetaTags} />
      <NavSpacer>
        <Fluid>
          <ImgFluid
            style={{ maxWidth: 1920, margin: '0 auto' }}
            image={portfolio.heroImage.gatsbyImageData}
            alt={portfolio.heroImage.alt}
          />
        </Fluid>
        {/* <Wrapper> */}
        <Content>
          <Heading>
            <h3>{portfolio.heading}</h3>
          </Heading>
          <Filters>
            <FilterButton className={filter === 'All' && 'filter-active'} onClick={() => setFilter('All')}>
              All
            </FilterButton>
            {validators?.edges?.length > 0 &&
              validators.edges[0].node.filters.enum.values.map((value) => (
                <FilterButton
                  key={value}
                  className={filter === value && 'filter-active'}
                  onClick={() => setFilter(value)}
                >
                  {value}
                </FilterButton>
              ))}
          </Filters>
        </Content>
        {/* </Wrapper> */}
        <Wrapper style={{ paddingBottom: '4rem' }}>
          <Gallery>
            {filteredEvents.map(({ event }) => (
              <ImgLink key={event.slug} to={`/portfolio/${event.slug}`}>
                <ImgOverlay>
                  <div>
                    {event.title && <VenueMeta>{event.title}</VenueMeta>}
                    {event.location && <h5>{event.location}</h5>}
                  </div>
                </ImgOverlay>
                <GatsbyImage image={event.coverImage.gatsbyImageData} alt={event.coverImage.alt} />
              </ImgLink>
            ))}
            {/* {events.edges.map(({ event }) => (
            <ImgLink key={event.slug} to={`/portfolio/${event.slug}`}>
              <ImgOverlay>
                <div>
                  {event.title && <VenueMeta>{event.title}</VenueMeta>}
                  {event.location && <h5>{event.location}</h5>}
                </div>
              </ImgOverlay>
              <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
            </ImgLink>
          ))} */}
          </Gallery>
        </Wrapper>
        {portfolio.connectEnabled && <Connect />}
      </NavSpacer>
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
const Filters = styled.div`
  width: 100%;
  max-width: calc((130px * 5) + 40px);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-content: center;
  justify-items: center;
`
const FilterButton = styled(ButtonSimple)`
  padding: 8px 14px;
  width: fit-content;
  width: 120px;
  font-size: 18px;
  font-weight: normal;
  background: transparent;
  color: var(--text-color);
  border: 3px solid var(--primary-color);
  &:hover {
    background: var(--primary-color);
    color: var(--textLight-color);
  }
  &.filter-active {
    background: var(--primary-color);
    color: var(--textLight-color);
  }
`
const ImgLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  /* transition: all 0.3s ease-out; */
  &:hover {
    transform: scale(1.02);
  }
`

const VenueMeta = styled.h4`
  & a {
    color: var(--textLight-color);
  }
  & p {
    margin-bottom: 0;
  }
`

export const query = graphql`
  query PortfolioQuery {
    portfolio: datoCmsPortfolio {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroImage {
        alt
        gatsbyImageData(width: 1920, placeholder: BLURRED, imgixParams: { auto: "compress" })
        # fluid(maxWidth: 1920, imgixParams: { fm: "png", auto: "compress" }) {
        #   ...GatsbyDatoCmsFluid
        # }
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
          venue
          location
          eventType
          coverImage {
            alt
            originalId
            gatsbyImageData(
              width: 800
              height: 800
              placeholder: BLURRED
              imgixParams: { auto: "compress", fit: "crop", crop: "faces,edges", w: "800", h: "800" }
            )
            # fluid(
            #   maxWidth: 800
            #   maxHeight: 800
            #   imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "800", h: "800" }
            # ) {
            #   ...GatsbyDatoCmsFluid
            # }
          }
        }
      }
    }
    validators: allDatoCmsField(filter: { label: { eq: "Event Type" } }) {
      edges {
        node {
          label
          filters: validators
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
