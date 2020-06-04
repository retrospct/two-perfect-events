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
export const onServiceWorkerUpdateReady = () => window.location.reload(true)
