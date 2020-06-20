import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll' // TODO: Remove this package if not being used
import { Link } from 'components/common'
import { useTheme } from 'context/themeContext'
import { Wrapper, NavLink, CTANavLink } from './styles'
import { ToggleDarkMode } from '../ToggleDarkMode'

export const NavbarLinks = ({ desktop }) => {
  const { currentTheme, toggleTheme } = useTheme()
  return (
    <Wrapper desktop={desktop}>
      <NavLink as={Link} to="/portfolio" activeClassName="selected">
        PORTFOLIO
      </NavLink>
      <NavLink as={Link} to="/about" activeClassName="selected">
        ABOUT
      </NavLink>
      <NavLink as={Link} to="/services" activeClassName="selected">
        SERVICES
      </NavLink>
      <NavLink as={Link} to="/blog" activeClassName="selected">
        BLOG
      </NavLink>
      <CTANavLink as={Link} to="/contact" activeClassName="selected">
        CONTACT
      </CTANavLink>
      <ToggleDarkMode currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {/* <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink> */}
    </Wrapper>
  )
}
