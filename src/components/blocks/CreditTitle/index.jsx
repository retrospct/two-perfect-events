import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Title } from './styles'

export const CreditTitle = ({ block }) => <Title>{block.title && <h3>{block.title}</h3>}</Title>

