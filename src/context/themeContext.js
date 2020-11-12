import React, { useState, useContext, useCallback } from 'react'
import media from 'use-media'
import { ThemeProvider as BaseThemeProvider, ThemeContext } from 'styled-components'
// import { useLocalStorage } from 'hooks/useLocalStorage'
import { lightTheme, darkTheme, superDarkTheme } from './themeTpe'

// const ThemeContext = createContext()

const themeFormatter = (themeToFormat) => {
  const { screens, ...themeValues } = themeToFormat
  const breakpointSizes = Object.keys(screens).reduce((accum, key) => {
    const value = media({ maxWidth: screens[key] })
    return {
      ...accum,
      [key]: value,
    }
  }, {})
  const mq = Object.keys(screens).reduce((accum, key) => {
    return {
      ...accum,
      [key]: screens[key],
    }
  }, {})
  return {
    ...themeValues,
    screens: breakpointSizes,
    mq,
  }
}

const ThemeProvider = ({ children }) => {
  // const [themeString, setThemeString] = useLocalStorage('theme', 'light')
  const [themeString, setThemeString] = useState('light') // comment out if using local storage
  const [prevTheme, setPrevTheme] = useState('light') // comment out if using local storage
  let themeObject
  if (themeString === 'dark') themeObject = themeFormatter(darkTheme)
  else if (themeString === 'superDark') themeObject = themeFormatter(superDarkTheme)
  else themeObject = themeFormatter(lightTheme)
  return (
    <ThemeContext.Provider value={{ themeString, setThemeString, prevTheme, setPrevTheme }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  const { themeString, setThemeString, prevTheme, setPrevTheme } = context
  const toggleTheme = useCallback(
    (newTheme) => {
      setPrevTheme(themeString)
      if (newTheme) {
        setThemeString(newTheme)
      } else {
        if (themeString === 'dark') setThemeString('light')
        else if (themeString === 'superDark') setThemeString('light')
        else if (themeString === 'light' && window?.location?.pathname?.includes('/portfolio'))
          setThemeString('superDark')
        else setThemeString('dark')
      }
    },
    [themeString, setThemeString, setPrevTheme]
  )
  return {
    currentTheme: themeString,
    prevTheme,
    toggleTheme,
    ...context,
  }
}

export { ThemeProvider, useTheme }

// function getInitialColorMode() {
//   const persistedColorPreference = window.localStorage.getItem('color-mode')
//   const hasPersistedPreference = typeof persistedColorPreference === 'string'
//   // If the user has explicitly chosen light or dark,
//   // let's use it. Otherwise, this value will be null.
//   if (hasPersistedPreference) {
//     return persistedColorPreference
//   }
//   // If they haven't been explicit, let's check the media
//   // query
//   const mql = window.matchMedia('(prefers-color-scheme: dark)')
//   const hasMediaQueryPreference = typeof mql.matches === 'boolean'
//   if (hasMediaQueryPreference) {
//     return mql.matches ? 'dark' : 'light'
//   }
//   // If they are using a browser/OS that doesn't support
//   // color themes, let's default to 'light'.
//   return 'light'
// }
// export const ThemeContext = React.createContext();
// export const ThemeProvider = ({ children }) => {
//   const [colorMode, rawSetColorMode] = React.useState(undefined);
//   React.useEffect(() => {
//     const root = window.document.documentElement;
//     const initialColorValue = root.style.getPropertyValue(
//       '--initial-color-mode'
//     );
//     rawSetColorMode(initialColorValue);
//   }, []);
//   function setColorMode(newValue) {
//     const root = window.document.documentElement;
//     // 1. Update React color-mode state
//     rawSetColorMode(newValue);
//     // 2. Update localStorage
//     localStorage.setItem('color-mode', newValue);
//     // 3. Update each color
//     root.style.setProperty(
//       '--color-text',
//       newValue === 'light' ? COLORS.light.text : COLORS.dark.text
//     );
//     root.style.setProperty(
//       '--color-background',
//       newValue === 'light' ? COLORS.light.background : COLORS.dark.background
//     );
//     root.style.setProperty(
//       '--color-primary',
//       newValue === 'light' ? COLORS.light.primary : COLORS.dark.primary
//     );
//   }
//   return (
//     <ThemeContext.Provider value={{ colorMode, setColorMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
