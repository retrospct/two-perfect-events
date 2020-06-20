import React from 'react'
import { Wrapper } from './styles'

export const Quote = ({ block }) => {
  return (
    <Wrapper>
      <p>{block.quote}</p>
      <hr />
      <small>{block.author}</small>
    </Wrapper>
  )
}
