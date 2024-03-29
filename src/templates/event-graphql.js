import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { LinkBase, Icon, IconArrow } from 'components/common'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Container, Footer, Connect, NavSpacer } from 'components/common'

const Event = ({ location, data }) => {
  const { event, footer } = data
  const siteSeo = useSiteDatoMeta()
  // const galleryRow = () => {
  //   for (let i = 0; i < event.gallery.length; i++) {
  //     if (event.gallery[i].fluid.aspectRatio <= 1 && event.gallery[i + 1].fluid.aspectRatio <= 1) {
  //       const TwoCol = (
  //         <BlockSection key={event.gallery[i].originalId}>
  //           <TwoColImage>
  //             <Img fluid={event.gallery[i].fluid} alt={event.gallery[i].alt} />
  //             <Img fluid={event.gallery[i + 1].fluid} alt={event.gallery[i + 1].alt} />
  //           </TwoColImage>
  //         </BlockSection>
  //       )
  //       return TwoCol
  //     } else {
  //       return (
  //         <BlockSection key={event.gallery[i].originalId}>
  //           <OneColImage>
  //             <Img fluid={event.gallery[i].fluid} alt={event.gallery[i].alt} />
  //           </OneColImage>
  //         </BlockSection>
  //       )
  //     }
  //   }
  // }
  return (
    <Layout location={location}>
      <Seo siteSeo={siteSeo} pageSeo={event.seoMetaTags} />
      <NavSpacer>
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
                <VenueMeta dangerouslySetInnerHTML={{ __html: event.venue }} />
                <h3>{event.location}</h3>
              </MetaItem>
              <MetaItem>
                <h2>Event Type</h2>
                <h3>{event.eventType}</h3>
              </MetaItem>
              <MetaItem>
                <h2>Vendors</h2>
                <div dangerouslySetInnerHTML={{ __html: event.vendors }} />
              </MetaItem>
            </Meta>
          </Content>
        </Wrapper>
        <GalleryWrapper>
          {/* <Container> */}
          <OneColImage>
            <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
          </OneColImage>
          {/* </Container> */}
          <GalleryGrid>
            {event.gallery.map((img) => {
              if (img.fluid.aspectRatio <= 1) {
                return (
                  <Img
                    key={img.originalId}
                    fluid={img.fluid}
                    alt={img.alt}
                    style={{ gridColumn: 'span 1', height: '100%', width: '100%' }}
                  />
                )
              } else {
                return (
                  <Img
                    key={img.originalId}
                    fluid={img.fluid}
                    alt={img.alt}
                    style={{ gridColumn: 'span 2', height: '100%', width: '100%' }}
                  />
                )
              }
            })}
          </GalleryGrid>
        </GalleryWrapper>
        <Connect variant="primary" />
      </NavSpacer>
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
  justify-content: flex-start;
  width: 100%;
`
const GalleryWrapper = styled.div`
  /* padding: 4rem 0; */
  display: block;
  /* flex-direction: column;
  align-items: center;
  justify-content: flex-start; */
  position: relative;
  height: 100%;
  width: 100%;
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
  @media (max-width: ${({ theme }) => theme.mq.md}px) {
    width: 100%;
    flex-direction: column;
  }
`
const VenueMeta = styled.h3`
  & a {
    color: var(--textLight-color);
  }
  & p {
    margin-bottom: 0;
  }
`
const MetaOneLiner = styled.div`
  font-family: var(--sans-font);
  font-size: 1.15rem;
  color: var(--text-color);
  font-weight: 300;
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
  letter-spacing: 0.3rem;
`

const GalleryGrid = styled.div`
  /* height: fit-content; */
  /* overflow-y: auto; */
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: repeat(auto-fit, 1fr); */
  justify-items: center;
  justify-content: space-between;
  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    width: 100%;
    grid-gap: 5px;
  }
`
// const BlockSection = styled.section`
//   width: 100%;
// `
const OneColImage = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: 420px;
  margin: 0 auto 20px;
  & .gatsby-image-wrapper {
    min-height: 420px;
  }
  & img {
    min-height: 420px;
  }
`
// const TwoColImage = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-gap: 20px;
//   margin-bottom: 20px;
//   /* min-height: 420px; */
//   & .gatsby-image-wrapper {
//     width: 100%;
//   }
//   & img {
//     width: 100%;
//   }
// `

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
      oneLiner
      vendors
      coverImage {
        originalId
        fluid(maxWidth: 960, imgixParams: { fm: "jpg" }) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      gallery {
        originalId
        fluid(maxWidth: 800, maxHeight: 800, imgixParams: { fm: "jpg" }) {
          ...GatsbyDatoCmsFluid
          aspectRatio
        }
        alt
      }
      # eventGallery {
      #   ... on DatoCmsImageOneColumn {
      #     model {
      #       apiKey
      #     }
      #     id
      #     imageFluid {
      #       fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
      #         ...GatsbyDatoCmsFluid
      #       }
      #       alt
      #     }
      #   }
      #   ... on DatoCmsImageTwoColumn {
      #     model {
      #       apiKey
      #     }
      #     id
      #     imageLeft {
      #       fluid(maxWidth: 720, imgixParams: { fm: "jpg", auto: "compress" }) {
      #         ...GatsbyDatoCmsFluid
      #       }
      #       alt
      #     }
      #     imageRight {
      #       fluid(maxWidth: 720, imgixParams: { fm: "jpg", auto: "compress" }) {
      #         ...GatsbyDatoCmsFluid
      #       }
      #       alt
      #     }
      #   }
      # }
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
