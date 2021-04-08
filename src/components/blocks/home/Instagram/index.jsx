import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from 'components/common'
import { Wrapper, Content, Header, Username, InstaGallery, InstaLink, UsernameLink } from './styles'
import logoInstagram from 'assets/logo-instagram.png'

// TODO: add the correct security HTML attributes to the link a element below
export const Instagram = ({ block, instaLatest }) => (
  <Wrapper as={Container}>
    <Content>
      <Header>{block.heading && <h3>{block.heading}</h3>}</Header>
      <a href={block.socialLink.linkUrl} target="_blank" rel="noopener noreferrer">
        <img style={{ marginBottom: 10 }} src={logoInstagram} alt="Instagram logo" />
      </a>
      {block.socialLink && (
        <Username>
          Latest from{' '}
          <UsernameLink href={block.socialLink.linkUrl} target="_blank" rel="noopener noreferrer">
            {block.socialLink.username}
          </UsernameLink>
        </Username>
      )}
      <InstaGallery>
        {instaLatest &&
          instaLatest.map((insta) => (
            <InstaLink
              key={insta.node.id}
              href={`https://instagram.com/p/${insta.node.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={insta.node.localFile.childImageSharp.gatsbyImageData}
                alt={insta.node.caption.substring(0, 100)} />
            </InstaLink>
          ))}
      </InstaGallery>

      {/* <InstaGallery>
        {block.instaGallery &&
          block.instaGallery.map(insta => <Img key={insta.originalId} fluid={insta.fluid} alt={insta.alt} />)}
      </InstaGallery> */}
      {/* <MoreLink>
        <ButtonOutline as={Link} to={block.moreLink.path}>
          {'> MORE' || block.moreLink.text}
        </ButtonOutline>
      </MoreLink> */}
    </Content>
  </Wrapper>
)

// instaGallery {
//   originalId
//   fluid(
//     maxWidth: 320
//     maxHeight: 320
//     imgixParams: { fm: "jpg", auto: "compress", fit: "crop", crop: "faces,edges", w: "320", h: "320" }
//   ) {
//     ...GatsbyDatoCmsFluid
//   }
// }
