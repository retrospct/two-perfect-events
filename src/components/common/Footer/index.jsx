import React from 'react'

import { Container, TPELogomark, TPELogoFooter, LinkExternalBase, LinkBase } from 'components/common'
import { Wrapper, Flex, Links, Serving, Company, Fluid, BottomNavigation, BottomNavLink } from './styles'
import { useTheme } from 'context/themeContext'

export const Footer = ({ links, serving, copyright }) => {
  const { currentTheme, screens } = useTheme()
  return (
    <Wrapper>
      <Fluid as={Container}>
        <Company>
          {screens.md && (
            <LinkBase to="/">
              <TPELogomark color={currentTheme === 'dark' || currentTheme === 'superDark' ? '#fff' : null} />
            </LinkBase>
          )}
          {!screens.md && (
            <LinkBase to="/">
              <TPELogoFooter color={currentTheme === 'dark' || currentTheme === 'superDark' ? '#fff' : null} />
            </LinkBase>
          )}
          <span>
            {copyright && `© ${new Date().getFullYear()} ${copyright}`}
            {!copyright && `© ${new Date().getFullYear()} Two Perfect Events™`}
          </span>
        </Company>
        <BottomNavigation>
          <div className="bottom-nav-first">
            <BottomNavLink to="/">HOME</BottomNavLink>
            <BottomNavLink to="/portfolio">PORTFOLIO</BottomNavLink>
            <BottomNavLink to="/about">ABOUT</BottomNavLink>
            <BottomNavLink to="/contact">CONTACT</BottomNavLink>
          </div>
          <div className="bottom-nav-second">
            <BottomNavLink to="/services" className="bottom-nav-menu">
              SERVICES
            </BottomNavLink>
            <BottomNavLink to="/weddings" className="bottom-nav-submenu">
              WEDDINGS
            </BottomNavLink>
            <BottomNavLink to="/design" className="bottom-nav-submenu">
              DESIGN
            </BottomNavLink>
            <BottomNavLink to="/corporate" className="bottom-nav-submenu">
              CORPORATE
            </BottomNavLink>
            <BottomNavLink to="/private-parties" className="bottom-nav-submenu">
              PRIVATE PARTIES
            </BottomNavLink>
          </div>
        </BottomNavigation>
      </Fluid>
      <Flex as={Container}>
        <Links>
          {links.map((link) => (
            <LinkExternalBase
              key={link.id}
              href={link.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${link.text}`}
            >
              <div>
                <img
                  width="36"
                  height="36"
                  src={link.icon.url}
                  alt={link?.icon?.alt || 'Two Perfect Events social media platform logos'}
                />{' '}
                <span>{link.title}</span>
              </div>
              <p>{link.linkText}</p>
            </LinkExternalBase>
          ))}
        </Links>
        <Serving>{serving}</Serving>
      </Flex>
    </Wrapper>
  )
}
