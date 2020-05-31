import React from 'react'
import { Container, Link } from 'components/common'
// import tpeLogomark from 'assets/tpeLogomark.svg'
// import tpeLogo from 'assets/tpeLogo.svg'
import { TPELogo, TPELogomark } from 'components/elements'
import { useTheme } from 'context/theme-context'
import { NavbarLinks } from '../NavbarLinks'
import { Wrapper, LogoWrapper } from './styles'

export const Navbar = () => {
  const { currentTheme, screens, colors } = useTheme()
  console.log(screens.lg)
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
// //<img
//               src={tpeLogo}
//               alt="Two number 2s mirrored horizontally in the shape of heart centered in a purple circle next to the words Two Perfect Events."
//             />
// <img
//   src={tpeLogomark}
//   alt="Two number 2s mirrored horizontally in the shape of heart centered in a purple circle."
// />
