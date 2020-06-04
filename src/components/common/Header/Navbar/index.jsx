import React from 'react'
import { Container, Link } from 'components/common'
import { TPELogo, TPELogomark } from 'components/elements'
import { useTheme } from 'context/themeContext'
import { NavbarLinks } from '../NavbarLinks'
import { Wrapper, LogoWrapper } from './styles'

export const Navbar = () => {
  const { currentTheme, screens } = useTheme()
  return (
    <Wrapper as={Container}>
      <Link to="/">
        <LogoWrapper>
          {!screens.xxl && <TPELogo color={currentTheme === 'dark' ? '#fff' : null} />}
          {screens.xxl && <TPELogomark color={currentTheme === 'dark' ? '#fff' : null} />}
        </LogoWrapper>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  )
}
