import React from 'react'
import Img from 'gatsby-image'
import { Container, ContactForm } from 'components/common'
import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'
import { Fluid, Wrapper, ContactBlock, Spotlight, Header, ImgBlock } from './styles'

export const Contact = ({ heading, image }) => (
  <Fluid id="contact">
    <Wrapper as={Container}>
      <ContactBlock>
        <Spotlight>
          <img src={arrowSquiggly} alt="Arrow pointing towards let's get this party started" />
        </Spotlight>
        <Header>{heading && <h3>{heading}</h3>}</Header>
        <ContactForm heading={heading} />
      </ContactBlock>
      <ImgBlock>
        <Img fixed={image.fixed} alt={image.alt} />
      </ImgBlock>
    </Wrapper>
  </Fluid>
)
