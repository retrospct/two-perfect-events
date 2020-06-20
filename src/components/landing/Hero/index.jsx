import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'
import { Wrapper, IntroWrapper, Details, ArrowNext } from './styles'

export const Hero = ({ heading, subheading }) => (
  <Wrapper>
    <IntroWrapper as={Container}>
      <Details>
        <h1>{heading}</h1>
        <h4>{subheading}</h4>
        <Button as={AnchorLink} href="#contact">
          Contact Us
        </Button>
      </Details>
      <ArrowNext>
        <img src={arrowSquiggly} alt="Line illustration of a purple downward facing squiggly arrow." />
      </ArrowNext>
    </IntroWrapper>
  </Wrapper>
)
