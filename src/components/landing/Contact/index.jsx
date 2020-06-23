import React from 'react'
import Img from 'gatsby-image'
import { Container, ContactForm } from 'components/common'
// import contact from 'assets/illustrations/contact.svg'
import { Fluid, Wrapper, ContactBlock, Header, ImgBlock } from './styles'

export const Contact = ({ heading, image }) => (
  <Fluid id="contact">
    <Wrapper as={Container}>
      <ContactBlock>
        {heading && (
          <Header>
            <h3>{heading}</h3>
          </Header>
        )}
        <ContactForm heading={heading} />
      </ContactBlock>
    </Wrapper>
    <ImgBlock>
      <Img fluid={image.fluid} alt={image.alt} />
    </ImgBlock>
  </Fluid>
)
