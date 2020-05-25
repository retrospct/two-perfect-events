import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'components/common'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <Link to="/about">AboutCMS</Link>
    <Link to="/demo">DemoCMS</Link>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
    <AnchorLink href="#contact">Contact</AnchorLink>
  </Wrapper>
)

export default NavbarLinks