/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'
import 'normalize.css'

import { ThemeProvider } from './src/context/themeContext'
import { GlobalStyle } from './src/components/common'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
