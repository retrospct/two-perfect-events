import React from 'react'
import { Container, Link } from 'components/common'
import { NavbarLinks } from '../NavbarLinks'
import { Wrapper } from './styles'

export const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">Two Perfect Events</Link>
    <NavbarLinks desktop />
  </Wrapper>
)

// export default Navbar
