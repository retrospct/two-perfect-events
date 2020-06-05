import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Img from 'gatsby-image'
import { Container, Button } from 'components/common'
// import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Intro = ({ image, textNode }) => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        {/* <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" /> */}
        <Img fluid={image.fluid} alt={image.alt} />
      </Thumbnail>
      <Details>
        <div dangerouslySetInnerHTML={{ __html: textNode }} />
        <Button as={AnchorLink} href="#contact">
          Contact Us
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
