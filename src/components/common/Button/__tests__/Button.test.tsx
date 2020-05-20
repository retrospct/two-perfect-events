import React from 'react'
import { Button } from '../Button'
import { render } from '@testing-library/react'

it('matches snapshot', () => {
  const { asFragment } = render(<Button>Hello World!</Button>)
  expect(asFragment()).toMatchSnapshot()
})
