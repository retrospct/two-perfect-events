import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Container, Footer } from 'components/common'

const Wrapper = styled(Container)`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`
export const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Portfolio = ({ data }) => {
  const siteSeo = useSiteDatoMeta()

  return (
    <Layout>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.portfolio.seoMetaTags} />
      <Container>
        <Img fluid={data.portfolio.heroImage.fluid} alt={data.portfolio.heroImage.alt} />
      </Container>
      <Wrapper>
        <Content>
          <h3>{data.portfolio.heading}</h3>
          <h4>{data.portfolio.filters}</h4>
        </Content>
      </Wrapper>
      <Wrapper>
        <Gallery>
          {data.portfolio.events.map((event) => (
            <Link key={event.slug} to={`/${event.slug}`} style={{ width: '100%', height: '100%' }}>
              <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
            </Link>
          ))}
        </Gallery>
      </Wrapper>
      <Footer links={data.footer.links} serving={data.footer.serving} copyright={data.footer.copyright} />
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query PortfolioQuery {
    portfolio: datoCmsPortfolio {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroImage {
        fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      heading
      filters
      events {
        title
        slug
        venue
        location
        eventType
        photographer
        excerpt
        excerptNode {
          childMarkdownRemark {
            html
          }
        }
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
        # gallery{
        #   originalId
        #   fluid(maxHeight: 1440, imgixParams: { fm: "jpg", auto: "compress" }) {
        #     ...GatsbyDatoCmsFluid
        #   }
        # }
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
