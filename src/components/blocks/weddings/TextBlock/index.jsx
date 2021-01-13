import React from 'react'
// import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'
import { Container } from 'components/common'

export const TextBlock = ({ block }) => (
  <Content>
    <div className="text-block-statement" dangerouslySetInnerHTML={{ __html: block.statement }} />
  </Content>
)

const Content = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & .text-block-statement h4 {
    padding: 4rem 0 1rem;
    margin-bottom: 0;
    font-family: var(--serif-font);
    font-size: 2rem;
    letter-spacing: 0.1rem;
    color: var(--accent-color);
  }
`
