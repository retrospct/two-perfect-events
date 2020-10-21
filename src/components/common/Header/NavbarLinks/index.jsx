import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll' // TODO: Remove this package if not being used

import { useTheme } from 'context/themeContext'

import { Link, LinkBase, ButtonNavCTA } from 'components/common'
import { Wrapper, NavLink, NavLinkFirst } from './styles'
import { ToggleDarkMode } from '../ToggleDarkMode'
// import { useNavLinks } from 'hooks/useNavLinks'

export const NavbarLinks = ({ desktop }) => {
  const { currentTheme, toggleTheme } = useTheme()
  // const navLinks = useNavLinks()
  console.log('currentTheme: ', currentTheme)
  // console.log('toggleTheme: ', toggleTheme)
  return (
    <Wrapper desktop={desktop}>
    {/* {navLinks.map(link => (
      <NavLink as={Link} to={link.path} activeClassName="selected">{link.text}</NavLink>
    ))} */}
      {!desktop && (
        <NavLinkFirst as={Link} to="/" activeClassName="selected">
          HOME
        </NavLinkFirst>
      )}
      {desktop && (
        <NavLink as={Link} to="/" activeClassName="selected">
          HOME
        </NavLink>
      )}
      <NavLink as={Link} to="/portfolio" activeClassName="selected" partiallyActive={true}>
        PORTFOLIO
      </NavLink>
      <NavLink as={Link} to="/about" activeClassName="selected">
        ABOUT
      </NavLink>
      <NavLink as={Link} to="/services" activeClassName="selected">
        SERVICES
      </NavLink>
      {/* <NavLink as={Link} to="/blog" activeClassName="selected">
        BLOG
      </NavLink> */}
      <ButtonNavCTA as={AnchorLink} href="#contact">
        CONTACT
      </ButtonNavCTA>
      {/* <ButtonNavCTA as={LinkBase} to="/contact" activeClassName="selected">
        CONTACT
      </ButtonNavCTA> */}
      {/* <CTANavLink as={Link} to="/contact" activeClassName="selected">
        CONTACT
      </CTANavLink> */}
      <ToggleDarkMode currentTheme={currentTheme} toggleTheme={() => toggleTheme()} />
    </Wrapper>
  )
}
