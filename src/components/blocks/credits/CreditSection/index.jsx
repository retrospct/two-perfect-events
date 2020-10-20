import React from 'react'
import styled from 'styled-components'

export const CreditSection = ({ block }) => <Section>{block.heading && <h3>{block.heading}</h3>}</Section>

const Section = styled.div`
  text-align: center;
  text-transform: uppercase;
  h3 {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin: 1.5rem 0 1rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`