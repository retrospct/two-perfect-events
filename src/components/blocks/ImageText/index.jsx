import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'
import { Container, Button } from 'components/common'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const ImageText = ({ block }) => (
  <Wrapper id="intro">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <Img fluid={block.image.fluid} alt={block.image.alt} />
      </Thumbnail>
      <Details>
        <div dangerouslySetInnerHTML={{ __html: block.textNode.childMarkdownRemark.html }} />
        <Button as={AnchorLink} href="#contact">
          Contact Us
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
