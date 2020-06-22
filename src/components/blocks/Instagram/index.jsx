import React from 'react'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Container, ButtonOutline, LinkExternal } from 'components/common'
import { Wrapper, Content, Header, Username, InstaGallery } from './styles'

// TODO: add the correct security HTML attributes to the link a element below
export const Instagram = ({ block }) => (
  <Wrapper as={Container}>
    <Content>
      <Header>{block.heading && <h3>{block.heading}</h3>}</Header>
      {block.socialLink && (
        <Username>
          <LinkExternal href={block.socialLink.url} target="_blank">
            {block.socialLink.username}
          </LinkExternal>
        </Username>
      )}
      <InstaGallery>
        {block.instaGallery &&
          block.instaGallery.map(insta => <Img key={insta.originalId} fluid={insta.fluid} alt={insta.alt} />)}
      </InstaGallery>
      {/* <MoreLink>
        <ButtonOutline as={Link} to={block.moreLink.path}>
          {'> MORE' || block.moreLink.text}
        </ButtonOutline>
      </MoreLink> */}
    </Content>
  </Wrapper>
)
