import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header, Section } from 'components/theme'
import { Container, Button } from 'components/common'
import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'
import { Wrapper, IntroWrapper, Details, ArrowNext } from './styles'

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Go, enjoy yourself!</h1>
        <h4>We'll take care of the rest.</h4>
        <Button as={AnchorLink} href="#contact">
          Contact Us
        </Button>
      </Details>
      <ArrowNext>
        <img
          src={arrowSquiggly}
          alt="Line illustration of a beautifully set rectangular table with floral arrangments, crystal, fine china, and a linen runner."
        />
      </ArrowNext>
    </IntroWrapper>
  </Wrapper>
)
