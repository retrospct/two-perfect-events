import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Container, Connect, BaseGallery } from 'components/common'

const About = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()

  return (
    <Layout location={location} footer={data.footer}>
      <Header />
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
      <Content as={Container}>
        <Gallery>
          {data.about.teamTpe.map((member) => (
            <Team key={member.originalId}>
              <Img fixed={member.fixed} alt={member.alt} />
              <div className="about-team-member">
                <h3>{member.title}</h3>
                <h4>{member.alt}</h4>
                {/* <h4>{JSON.stringify(member.customData.name)}</h4>
                  <h5>{JSON.stringify(member.customData.title)}</h5> */}
              </div>
            </Team>
          ))}
        </Gallery>
      </Content>
      {data.about.connectEnabled && <Connect variant="inverse" />}
      <Content as={Container}>
        <Heading>Features</Heading>
        <Heading>Awards</Heading>
        <Heading>Preferred Planner For</Heading>
      </Content>
      {data.about.connectEnabled && <Connect variant="primary" />}
    </Layout>
  )
}

export default About

const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h3`
  align-self: flex-start;
  font-family: var(--serif-font);
  font-weight: 100;
  font-size: 2.5rem;
  color: var(--accent-color);
  /* text-transform: capitalize; */
  letter-spacing: 0.3rem;
  margin-bottom: 0.5rem;
`
const Subtitle = styled.h3`
  align-self: flex-start;
  font-family: var(--serif-font);
  font-weight: 300;
  font-size: 2.87rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`
const Wrapper = styled(Container)`
  position: relative;
  height: 100%;
  padding: 0 0 6rem;
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
const Gallery = styled.div`
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
`
const Heading = styled.h1`
  font-family: var(--serif-font);
  font-weight: 300;
  font-size: 2.87rem;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      backgroundImage {
        fluid(maxHeight: 1064, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
      intro
      teamTpe {
        originalId
        fixed(
          width: 320
          height: 320
          imgixParams: { fm: "png", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
        ) {
          ...GatsbyDatoCmsFixed
        }
        alt
        title
        # customData
      }
      connectEnabled
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
