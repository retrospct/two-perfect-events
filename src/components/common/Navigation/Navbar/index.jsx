import React from 'react'
import { Container, Link, TPELogo, TPELogomark } from 'components/common'
import { useTheme } from 'context/themeContext'
import { NavbarLinks } from '../NavbarLinks'
import { Wrapper, LogoWrapper } from './styles'

export const Navbar = ({ location }) => {
  const { currentTheme, screens } = useTheme()
  return (
    <Wrapper as={Container}>
      <Link to="/">
        <LogoWrapper>
          {!screens.md && <TPELogo color={currentTheme === 'dark' || currentTheme === 'superDark' ? '#fff' : null} />}
          {screens.md && (
            <TPELogomark color={currentTheme === 'dark' || currentTheme === 'superDark' ? '#fff' : null} />
          )}
        </LogoWrapper>
      </Link>
      <NavbarLinks location={location} desktop />
    </Wrapper>
  )
}
