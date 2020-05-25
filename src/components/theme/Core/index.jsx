import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import media from 'use-media'
// import { GlobalStyles } from './globalStyles'
import themeTpe from './themeTpe'
import 'modern-css-reset/dist/reset.min.css'

// type DefaultThemeObject = Omit<typeof themeObject, 'screens'> & {
//   screens: {
//     [key: string]: number,
//   },
// }

export const theme = () => {
  const { screens, ...themeValues } = themeTpe
  const breakpointSizes = Object.keys(screens).reduce((accum, key) => {
    const value = media({ maxWidth: screens[key] })
    return {
      ...accum,
      [key]: value,
    }
  }, {})
  return {
    ...themeValues,
    screens: breakpointSizes,
  }
}

export const useTheme = () => useContext(ThemeContext)

// export { theme, useTheme }
