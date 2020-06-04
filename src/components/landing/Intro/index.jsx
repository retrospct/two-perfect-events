import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import dev from 'assets/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Intro = ({ textNode }) => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
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
