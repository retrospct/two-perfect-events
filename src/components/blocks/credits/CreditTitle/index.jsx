import React from 'react'
import styled from 'styled-components'

export const CreditTitle = ({ block }) => <Title>{block.title && <h3>{block.title}</h3>}</Title>

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  h3 {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`