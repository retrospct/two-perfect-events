import React, { useEffect } from 'react'
// import styled from 'styled-components'

import { useTheme } from 'context/themeContext'
import { Footer } from 'components/common'

export const Layout = ({ location, footer, children }) => {
  const { prevTheme, currentTheme, toggleTheme } = useTheme()
  useEffect(() => {
    const isPortfolio = location?.pathname?.includes('/portfolio')
    if (isPortfolio && currentTheme !== 'superDark') toggleTheme('superDark')
    else if (currentTheme === 'superDark' && !isPortfolio) toggleTheme(prevTheme)
  }, [])
  return (
    <>
      {/* <Navigation /> */}
      {children}
      {footer && <Footer links={footer.links} serving={footer.serving} copyright={footer.copyright} />}
    </>
  )
}

// const GridLayout = styled.div`
//   height: 100vh;
//   display: grid;
//   grid-template-columns: 86px 1fr;
//   grid-template-areas:
//     'header header'
//     'main main'
//     'footer footer';
//   grid-gap: 1rem;

//   @media (min-width: ${({ theme }) => theme.mq.lg}px) {
//     grid-template-columns: 500px 1fr;
//   }

//   header {
//     grid-area: header;
//   }

//   main {
//     grid-column: main;
//   }

//   aside {
//     grid-row: sidebar;
//   }

//   footer {
//     grid-column: footer;
//   }
// `
