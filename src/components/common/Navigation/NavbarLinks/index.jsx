import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll' // TODO: Remove this package if not being used

import { useTheme } from 'context/themeContext'

import { Link, LinkBase, ButtonNavCTA } from 'components/common'
import { Wrapper, NavLink, NavLinkFirst } from './styles'
import { ToggleDarkMode } from '../ToggleDarkMode'
// import { useNavLinks } from 'hooks/useNavLinks'

export const NavbarLinks = ({ desktop }) => {
  const { currentTheme, toggleTheme } = useTheme()
  // const routes = useNavLinks()
  // console.log('routes: ', routes)
  // // console.log('toggleTheme: ', toggleTheme)
  // const Route = (route) => {
  //   switch (route.path) {
  //     case '/home':
  //       return desktop ? (
  //         <NavLink as={Link} to="/" activeClassName="selected" partiallyActive={route.partiallyActive}>
  //           {route.text}
  //         </NavLink>
  //       ) : (
  //         <NavLinkFirst as={Link} to="/" activeClassName="selected" partiallyActive={route.partiallyActive}>
  //           {route.text}
  //         </NavLinkFirst>
  //       )
  //     case '/contact':
  //       return (
  //         <ButtonNavCTA as={LinkBase} to={route.path}>
  //           {route.text}
  //         </ButtonNavCTA>
  //       )
  //     default:
  //       return (
  //         <NavLink as={Link} to={route.path} activeClassName="selected" partiallyActive={route.partiallyActive}>
  //           {route.text}
  //         </NavLink>
  //       )
  //   }
  // }
  return (
    <Wrapper desktop={desktop}>
      {/* {navLinks.map(link => (
      <NavLink as={Link} to={link.path} activeClassName="selected">{link.text}</NavLink>
    ))} */}
      {/* {routes && routes.map((route) => <Route key={route.path} route={route} />)} */}
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
      <ButtonNavCTA as={LinkBase} to="/contact">
        CONTACT
      </ButtonNavCTA>
      {/* <NavLink as={Link} to="/blog" activeClassName="selected">
        BLOG
      </NavLink> */}
      {/* {window.location.pathname !== '/' && (
        <ButtonNavCTA as={LinkBase} to="/contact">
          CONTACT
        </ButtonNavCTA>
      )}
      {window.location.pathname === '/' && (
        <ButtonNavCTA as={AnchorLink} href="#contact">
          CONTACT
        </ButtonNavCTA>
      )} */}
      <ToggleDarkMode currentTheme={currentTheme} toggleTheme={() => toggleTheme()} />
    </Wrapper>
  )
}
