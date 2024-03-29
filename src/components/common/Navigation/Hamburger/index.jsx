import React from 'react'
import { Wrapper, Bar } from './styles'

export const Hamburger = ({ sidebar, toggle }) => (
  <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
)
