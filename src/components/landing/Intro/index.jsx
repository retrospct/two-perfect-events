import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from '../../theme'
import { Container, Button } from '../../common'
import dev from '../../../assets/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Welcome!</h1>
        <h4>Two Perfect Events & Weddings</h4>
        <Button as={AnchorLink} href="#contact">
          Contact Us
        </Button>
      </Details>
      <Thumbnail>
        <img src={dev} alt="Two Perfect Events & Weddings" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
