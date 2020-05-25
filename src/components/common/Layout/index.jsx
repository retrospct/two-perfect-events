import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, Footer } from 'components/theme'
// import { theme } from 'theme/Core'
import { Global } from './styles'
import './fonts.css'
// DatoCMS Layout Component
// export { LayoutCms } from './LayoutCms'

// const Container = styled.div`
//   margin: 0 auto;
//   max-width: 1080px;
//   padding: 2rem;
// `

export const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <Global />
      {children}
      <Footer />
    </ThemeProvider>
  </>
)
