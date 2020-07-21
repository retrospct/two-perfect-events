import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Header } from './styles'

export const PhotoCredits = ({ heading }) => (
  <Wrapper>
    <Flex as={Container}>
        <Header>{heading && <h3>{heading}</h3>}</Header>
    </Flex>
  </Wrapper>
)
