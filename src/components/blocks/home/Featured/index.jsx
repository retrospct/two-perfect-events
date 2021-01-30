import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Button, Heading } from 'components/common'
import { Wrapper, Content, Badges, MoreLink } from './styles'

export const Featured = ({ block }) => (
  <Wrapper as={Container}>
    <Content>
      <Heading>{block.heading && <h3>{block.heading}</h3>}</Heading>
      <Badges>
        {block.badges &&
          block.badges.map((badge) => <Img key={badge.originalId} fixed={badge.fixed} alt={badge.alt} />)}
      </Badges>
      <MoreLink>
        <Button as={Link} to={block.moreLink.path}>
          {'> MORE' || block.moreLink.text}
        </Button>
      </MoreLink>
    </Content>
  </Wrapper>
)
