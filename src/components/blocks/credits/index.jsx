import React from 'react'
import { CreditItem } from './CreditItem'
import { CreditSection } from './CreditSection'
import { Container } from 'components/common'
import { Wrapper, Content, Header } from './styles'

export const CreditsBlock = ({ heading, creditsBlock }) => (
  <Wrapper as={Container}>
    <Content>
        <Header>{heading && <p>{heading}</p>}</Header>
        {creditsBlock.map(block => (
        <div key={block.id}>
          {block.model.apiKey === 'credit_section' && <CreditSection block={block} />}
          {block.model.apiKey === 'credit_item' && <CreditItem block={block} />}
        </div>
      ))}
    </Content>
  </Wrapper>
)
