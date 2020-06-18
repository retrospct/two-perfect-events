import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'
import { Container, Button } from 'components/common'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const TextImage = ({ block }) => (
  <Wrapper id="intro">
    <SkillsWrapper as={Container}>
      <Details>
        <div dangerouslySetInnerHTML={{ __html: block.textNode.childMarkdownRemark.html }} />
        <Button as={AnchorLink} href="#contact">
          Contact Us
        </Button>
      </Details>
      <Thumbnail>
        <Img fluid={block.image.fluid} alt={block.image.alt} />
      </Thumbnail>
    </SkillsWrapper>
  </Wrapper>
)
