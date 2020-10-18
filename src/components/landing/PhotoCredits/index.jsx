import React from 'react'
import { CreditItem, CreditTitle } from 'components/blocks'
import { Container } from 'components/common'
import { Wrapper, Flex, Header } from './styles'

export const PhotoCredits = ({ heading, creditsBlock }) => (
  <Wrapper>
    <Flex as={Container}>
        <Header>{heading && <h3>{heading}</h3>}</Header>
        {creditsBlock.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'credit_title' && <CreditTitle block={block} />}
          {block.model.apiKey === 'credit_item' && <CreditItem block={block} />}
        </div>
      ))}
    </Flex>
  </Wrapper>
)
