import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
// import dev from 'assets/illustrations/dev.svg'
import heroMain from 'assets/illustrations/heroMain.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

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
      {/* <Thumbnail>
        <img
          src={heroMain}
          alt="Line illustration of a beautifully set rectangular table with floral arrangments, crystal, fine china, and a linen runner."
        />
      </Thumbnail> */}
    </IntroWrapper>
  </Wrapper>
)
