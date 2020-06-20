import React, { useState, useContext, useCallback } from 'react'
import media from 'use-media'
import { ThemeProvider as BaseThemeProvider, ThemeContext } from 'styled-components'
// import { useLocalStorage } from 'hooks/useLocalStorage'
import { lightTheme, darkTheme } from './themeTpe'

// const ThemeContext = createContext()

const themeFormatter = themeToFormat => {
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
  const themeObject = themeString === 'dark' ? themeFormatter(darkTheme) : themeFormatter(lightTheme)
  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  const { themeString, setThemeString } = context
  const toggleTheme = useCallback(() => {
    if (themeString === 'light') setThemeString('dark')
    else if (themeString === 'dark') setThemeString('light')
  }, [themeString, setThemeString])
  return {
    currentTheme: themeString,
    toggleTheme,
    ...context,
  }
}

export { ThemeProvider, useTheme }
