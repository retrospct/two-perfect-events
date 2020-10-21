import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Container, Footer } from 'components/common'

const Event = ({ data }) => {
  const { event, footer } = data
  const siteSeo = useSiteDatoMeta()

  return (
    <Layout>
      <Seo siteSeo={siteSeo} pageSeo={event.seoMetaTags} />
      <Header />
      <Wrapper>
        <h4>
          <Link to="/portfolio">{'< Back to Porfolio'}</Link>
        </h4>
        <Content>
          <h3>{event.title}</h3>
          <h4>{event.venue}</h4>
          <h4>{event.location}</h4>
          <h4>{event.eventType}</h4>
          <h4>{event.photographer}</h4>
          <p>{event.excerpt}</p>
          <div dangerouslySetInnerHTML={{ __html: event.excerptNode.childMarkdownRemark.html }} />
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
      <Footer links={footer.links} serving={footer.serving} copyright={footer.copyright} />
    </Layout>
  )
}
// style={{ width: '100%', height: '100%' }}
export default Event

const Wrapper = styled(Container)`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  } */
`
const Content = styled.div`
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

export const query = graphql`
  query EventQuery($slug: String!) {
    event: datoCmsEvent(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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
