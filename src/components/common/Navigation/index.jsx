import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Hamburger } from './Hamburger'
import { Sidebar } from './Sidebar'
import { Wrapper, Overlay } from './styles'
import { useTheme } from 'context/themeContext'
import { ToggleDarkMode } from './ToggleDarkMode'

export const Navigation = () => {
  const { currentTheme, toggleTheme, screens } = useTheme()
  const [sidebar, toggle] = useState(false)
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
      {!screens.lg && <ToggleDarkMode currentTheme={currentTheme} toggleTheme={() => toggleTheme()} />}
      {screens.lg && sidebar && <ToggleDarkMode currentTheme={currentTheme} toggleTheme={() => toggleTheme()} />}
    </Wrapper>
  )
}
