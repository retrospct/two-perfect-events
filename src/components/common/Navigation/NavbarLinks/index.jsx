import React, { useEffect, useState } from 'react'

import { Link, LinkBase, ButtonNavCTA } from 'components/common'
import { Wrapper, NavLink, NavLinkFirst } from './styles'

export const NavbarLinks = ({ desktop, location }) => {
  const [isService, setIsService] = useState(false)
  useEffect(() => {
    if (location?.pathname === '/weddings') {
      setIsService(true)
    } else {
      setIsService(false)
    }
  }, [location?.pathname])

  return (
    <Wrapper desktop={desktop}>
      <nav role="navigation">
        <ul className="nav">
          {!desktop && (
            <li>
              <NavLinkFirst as={Link} to="/" activeClassName="selected">
                HOME
              </NavLinkFirst>
            </li>
          )}
          {desktop && (
            <li>
              <NavLink as={Link} to="/" activeClassName="selected">
                HOME
              </NavLink>
            </li>
          )}
          <li>
            <NavLink as={Link} to="/portfolio" activeClassName="selected" partiallyActive={true}>
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink as={Link} to="/about" activeClassName="selected">
              ABOUT
            </NavLink>
          </li>
          <li className="dropdown-container">
            <NavLink
              as={Link}
              to="/services"
              activeClassName="selected"
              className={isService && 'selected'}
              aria-haspopup
            >
              SERVICES
            </NavLink>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <NavLink as={Link} to="/weddings" activeClassName="selected">
                  WEDDINGS
                </NavLink>
              </li>
              <li>
                <NavLink to="/design" activeClassName="selected" className="navlink-disabled">
                  DESIGN
                </NavLink>
              </li>
              <li>
                <NavLink to="/corporate" activeClassName="selected" className="navlink-disabled">
                  CORPORATE
                </NavLink>
              </li>
              <li>
                <NavLink to="/private-parties" activeClassName="selected" className="navlink-disabled">
                  PRIVATE PARTIES
                </NavLink>
              </li>
            </ul>
            {/* <NavLinkButton onClick={() => setShowDropdown(!showDropdown)} aria-haspopup>
              SERVICES
            </NavLinkButton> */}
            {/* {showDropdown && (
              <ul className="dropdown" aria-label="submenu">
                <li>
                  <NavLink as={Link} to="/services" activeClassName="selected">
                    OVERVIEW
                  </NavLink>
                  <NavLink as={Link} to="/weddings" activeClassName="selected">
                    WEDDINGS
                  </NavLink>
                </li>
              </ul>
            )} */}
          </li>
          <li>
            {/* <ButtonNavCTA as={AnchorLink} href="#contact">
              CONTACT
            </ButtonNavCTA> */}
            <ButtonNavCTA as={LinkBase} to="/contact">
              CONTACT
            </ButtonNavCTA>
          </li>
        </ul>
      </nav>

      {/* <ToggleDarkMode currentTheme={currentTheme} toggleTheme={() => toggleTheme()} /> */}
    </Wrapper>
  )
}

// {/* {navLinks.map(link => (
//       <NavLink as={Link} to={link.path} activeClassName="selected">{link.text}</NavLink>
//     ))} */}
//       {/* {routes && routes.map((route) => <Route key={route.path} route={route} />)} */}
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

// {/* <NavLink as={Link} to="/blog" activeClassName="selected">
//       BLOG
//     </NavLink> */}
//     {/* {window.location.pathname !== '/' && (
//       <ButtonNavCTA as={LinkBase} to="/contact">
//         CONTACT
//       </ButtonNavCTA>
//     )}
//     {window.location.pathname === '/' && (
//       <ButtonNavCTA as={AnchorLink} href="#contact">
//         CONTACT
//       </ButtonNavCTA>
//     )} */}
