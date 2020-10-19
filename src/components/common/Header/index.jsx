import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Hamburger } from './Hamburger'
import { Sidebar } from './Sidebar'
import { Wrapper, Overlay } from './styles'
// import { useNavLinks } from 'hooks/useNavLinks'

export const Header = () => {
  const [sidebar, toggle] = useState(false)
  // const navLinks = useNavLinks()
  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      {/* <Navbar navLinks={navLinks} /> */}
      {/* {navLinks.map(link => console.log('link.path: ', link.path))} */}
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  )
}
