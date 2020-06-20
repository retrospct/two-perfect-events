import React from 'react'
// import { Container } from '../../common'
// import contact from '../../../assets/illustrations/contact.svg'
import { Container, ContactForm } from 'components/common'
import contact from 'assets/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail } from './styles'
// import { ContactForm } from './ContactForm'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="Contact the Two Perfect Events & Weddings team for a free consultation." />
    </Thumbnail>
  </Wrapper>
)
