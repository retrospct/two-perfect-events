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
