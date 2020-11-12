/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'
import 'normalize.css'

import { ThemeProvider } from './src/context/themeContext'
import { GlobalStyle } from './src/components/common'

// const MagicScriptTag = () => {
//   const codeToRunOnClient = `
//     (function() {
//       function getInitialColorMode() {
//         const persistedColorPreference = window.localStorage.getItem('color-mode')
//         const hasPersistedPreference = typeof persistedColorPreference === 'string'
//         // If the user has explicitly chosen light or dark,
//         // let's use it. Otherwise, this value will be null.
//         if (hasPersistedPreference) {
//           return persistedColorPreference
//         }
//         // If they haven't been explicit, let's check the media
//         // query
//         const mql = window.matchMedia('(prefers-color-scheme: dark)')
//         const hasMediaQueryPreference = typeof mql.matches === 'boolean'
//         if (hasMediaQueryPreference) {
//           return mql.matches ? 'dark' : 'light'
//         }
//         // If they are using a browser/OS that doesn't support
//         // color themes, let's default to 'light'.
//         return 'light'
//       }
//       const colorMode = getInitialColorMode();
//       const root = document.documentElement;
//       root.style.setProperty(
//         '--color-text',
//         colorMode === 'light'
//           ? '${COLORS.light.text}'
//           : '${COLORS.dark.text}'
//       );
//       root.style.setProperty(
//         '--color-background',
//         colorMode === 'light'
//           ? '${COLORS.light.background}'
//           : '${COLORS.dark.background}'
//       );
//       root.style.setProperty(
//         '--color-primary',
//         colorMode === 'light'
//           ? '${COLORS.light.primary}'
//           : '${COLORS.dark.primary}'
//       );
      
//       // Iterator instead of manually setting them all
//       Object.entries(COLORS).forEach(([name, colorByTheme]) => {
//         const cssVarName = ${`--color-${name}`};
//         root.style.setProperty(cssVarName, colorByTheme[newValue]);
//       });

//       root.style.setProperty('--initial-color-mode', colorMode);
//     })()
//   `
//   return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
// }

// const FallbackStyles = () => {
//   return (
//     <style>
//       {`
//         html {
//           --color-text: ${COLORS.text};
//           --color-background: ${COLORS.background};
//           --color-primary: ${COLORS.primary};
//         }
//       `}
//     </style>
//   );
// };

// export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
//   setHeadComponents(<FallbackStyles />);
//   setPreBodyComponents(<MagicScriptTag />);
// };

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <>
      <GlobalStyle />
      {element}
    </>
  </ThemeProvider>
)
