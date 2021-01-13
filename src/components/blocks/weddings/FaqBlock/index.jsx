import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/common'

export const FaqBlock = ({ block }) => (
  <Content>
    <Faq>
      <h4>{block.question}</h4>
      <FaqItem dangerouslySetInnerHTML={{ __html: block.answer }} />
    </Faq>
  </Content>
)

const Content = styled(Container)`
  width: 100%;
  padding: 1rem 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Faq = styled.div`
  max-width: 100%;
  & h4 {
    font-family: var(--serif-font);
    font-size: 1.4rem;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }
`
const FaqItem = styled.div`
  & p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.3;
  }
`
