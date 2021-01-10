import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Navigation, Container, Connect, Gallery, Divider } from 'components/common'

const About = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.about.seoMetaTags} />
      <Container>
        <Content>
          <Title>
            <em>{data.about.title}</em>
          </Title>
          <Subtitle>{data.about.subtitle}</Subtitle>
        </Content>
        <Wrapper>
          <HeroContent>
            <ImgBlock>
              <Img fluid={data.about.backgroundImage.fluid} alt={data.about.backgroundImage.alt} />
            </ImgBlock>
            <TextBlock>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.about.intro,
                }}
              />
            </TextBlock>
          </HeroContent>
        </Wrapper>
      </Container>
      {/* <Content as={Container}>
        <Divider />
      </Content> */}
      <Content as={Container}>
        <TeamGallery>
          {data.about.tpeTeam.map((member) => (
            <Team key={member.id}>
              <Img fixed={member.image.fixed} alt={member.image.alt} />
              <div className="about-team-member">
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
              </div>
            </Team>
          ))}
        </TeamGallery>
      </Content>
      {data.about.connectEnabled && <Connect variant="primary" />}
      <Content as={Container}>
        <Divider />
        <Heading style={{ marginTop: '3rem' }}>{data.about.featuresTitle || 'Features'}</Heading>
        <Gallery size="200px" columns={5} gap={60}>
          {data.about.features.map((feature) =>
            feature?.linkTo ? (
              <Linked key={feature.id} href={feature.linkTo} target="_blank" rel="noopener noreferrer">
                <Img fixed={feature.badge.fixed} alt={feature.badge.alt} />
              </Linked>
            ) : (
              <Img key={feature.id} fixed={feature.badge.fixed} alt={feature.badge.alt} />
            )
          )}
        </Gallery>
      </Content>
      <Content as={Container}>
        <Heading>{data.about.awardsTitle || 'Awards'}</Heading>
        <Gallery size="200px" columns={5} gap={60}>
          {data.about.awards.map((award) =>
            award?.linkTo ? (
              <Linked key={award.id} href={award.linkTo} target="_blank" rel="noopener noreferrer">
                <Img fixed={award.badge.fixed} alt={award.badge.alt} />
              </Linked>
            ) : (
              <Img key={award.id} fixed={award.badge.fixed} alt={award.badge.alt} />
            )
          )}
        </Gallery>
      </Content>
      <Content as={Container}>
        <Divider />
      </Content>
      <FluidContainer>
        <FluidContent as={Container}>
          <FluidHeader>
            <Heading>{data.about.preferredTitle || 'Preferred Planner For'}</Heading>
          </FluidHeader>
          <Gallery size="260px" columns={3} gap={30}>
            {data.about.preferredVenues.map((venue) => (
              <div key={venue.id}>
                <Img fixed={venue.badge.fixed} alt={venue.badge.alt} />
                <Label>
                  <p>{venue.name}</p>
                </Label>
              </div>
            ))}
            {/* {data.about.preferredVenues.map((venue) => (
            <Linked key={venue.originalId} href="https://twoperfectevents.com" target="_blank" rel="noopener noreferrer">
              <Img fixed={venue.badge.fixed} alt={venue.badge.alt} />
              <Label>
                <p>{venue.name}</p>
              </Label>
            </Linked>
          ))} */}
          </Gallery>
        </FluidContent>
      </FluidContainer>
      {data.about.connectEnabled && <Connect variant="primary" />}
    </Layout>
  )
}

export default About

const Linked = styled.a`
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`

const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FluidContent = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`
const FluidContainer = styled.div`
  width: 100%;
  background: var(--accent-color);
`
const FluidHeader = styled.div`
  max-width: 600px;
  padding: 30px 60px;
  & h1 {
    color: var(--textInverse-color);
  }
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    text-align: center;
  }
`
const Title = styled.h3`
  align-self: flex-start;
  font-family: var(--serif-font);
  font-weight: 100;
  font-size: 2.5rem;
  color: var(--accent-color);
  letter-spacing: 0.3rem;
  margin: 0 0.5rem 0.5rem;
`
const Subtitle = styled.h3`
  align-self: flex-start;
  font-family: var(--serif-font);
  font-weight: 300;
  font-size: 2.87rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  margin: 0 0.5rem 0.5rem;
`
const Wrapper = styled(Container)`
  position: relative;
  height: 100%;
  padding: 0 0 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`
const HeroContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 0 5rem;
`
const TextBlock = styled.div`
  flex: 1;
  width: 90%;
  background: var(--bg-color);
  padding: 3rem;
  z-index: 10;
  transform: translate(5rem, 5rem);
  /* border-radius: 12px; */
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.05);
  & :after {
    position: absolute;
    left: 34px;
    bottom: -30px;
    content: '';
    border: 3px solid var(--accent-color);
    display: inline-block;
    border-left: 0;
    border-top: 0;
    /* border-bottom-right-radius: 12px; */
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    transition: all 0.2s ease-out;
  }
  & h1 {
    font-family: var(--serif-font);
    color: var(--primary-color);
    font-size: 2rem;
  }
  & p {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    padding: 2rem 1rem;
    width: 100%;
    transform: translate(1rem, 5rem);
  }
`
const ImgBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  transform: translate(-40%, 0);
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    width: 90%;
    transform: translate(-10%, 0);
  }
  img {
    width: 100%;
  }
`
const TeamGallery = styled.div`
  width: 100%;
  /* max-width: calc(320px * 3 + 120px); */
  margin: 2rem 0;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    /* max-width: calc(320px * 2 + 60px); */
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 96%;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`
const Team = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  & .about-team-member h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  & .about-team-member h4 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`
const Heading = styled.h1`
  font-family: var(--serif-font);
  font-weight: 300;
  font-size: 2.5rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`
const Label = styled.div`
  /* background: var(--accent-color); */
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(24px + 2rem);
  width: 260px;
  & p {
    text-align: center;
    margin: 0;
    color: var(--textInverse-color);
    font-weight: 300;
    font-size: 1.1rem;
  }
`

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      slug
      title
      subtitle
      backgroundImage {
        fluid(maxHeight: 1064, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
      intro
      tpeTeam {
        title
        name
        id
        image {
          alt
          fixed(
            width: 320
            height: 320
            imgixParams: { fm: "png", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
      connectEnabled
      awardsTitle
      awards {
        id
        linkTo
        accoladeType
        badge {
          alt
          fixed(
            width: 200
            height: 200
            imgixParams: { fm: "png", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
      featuresTitle
      features {
        id
        linkTo
        accoladeType
        badge {
          alt
          fixed(
            width: 200
            height: 200
            imgixParams: { fm: "png", auto: "compress", fit: "crop", crop: "faces,edges", w: "200", h: "200" }
          ) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
      preferredTitle
      # preferredBackground {
      #   alt
      #   originalId
      #   fluid(imgixParams: { fm: "png", auto: "compress" }) {
      #     ...GatsbyDatoCmsSizes
      #   }
      # }
      preferredVenues {
        id
        name
        badge {
          alt
          # fluid(maxWidth: 260, maxHeight: 260, imgixParams: { fm: "png", auto: "compress" }) {
          #   ...GatsbyDatoCmsSizes
          # }
          fixed(width: 260, height: 260, imgixParams: { fm: "png", auto: "compress" }) {
            ...GatsbyDatoCmsFixed
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

// const MoreLinks = styled.ul`
//   margin-top: 1.5rem;
//   li a {
//     text-transform: uppercase;
//   }
// `

// {data.about.teamTpe.map(({ member }) => (
//   <ButtonBase key={member.originalId}>
//     <ImgOverlay>
//       <div>
//         {event.venueNode && (
//           <h4 dangerouslySetInnerHTML={{ __html: event?.venueNode?.childMarkdownRemark?.excerpt }} />
//         )}
//         {event.location && <h5>{event.location}</h5>}
//       </div>
//     </ImgOverlay>
//     <Img fluid={event.coverImage.fluid} alt={event.coverImage.alt} />
//   </ButtonBase>
// ))}
