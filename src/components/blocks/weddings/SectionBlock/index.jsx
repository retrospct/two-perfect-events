import React from 'react'
import styled from 'styled-components'

import { Divider, Container, Heading } from 'components/common'
import { ButtonCta } from '../ButtonCta'

export const SectionBlock = ({ block }) => (
  <FluidContainer golden={block.golden}>
    <SectionContent golden={block.golden}>
      {block.accentTop && <Divider />}
      <InnerContent accentTop={block.accentTop} accentBottom={block.accentBottom} centered={block.centered}>
        {block.heading && (
          <Heading style={block.accentTop ? { marginTop: '3rem' } : { marginTop: 0 }}>
            <h3>{block.heading}</h3>
          </Heading>
        )}
        {block.description && (
          <Description golden={block.golden} dangerouslySetInnerHTML={{ __html: block.description }} />
        )}
      </InnerContent>
      <ButtonCta block={block} />
      {block.accentBottom && <Divider />}
    </SectionContent>
  </FluidContainer>
)

const FluidContainer = styled.div`
  width: 100%;
  background: ${({ golden }) => (golden ? 'var(--accent-color)' : 'inherit')};
`
const SectionContent = styled(Container)`
  width: 100%;
  padding: ${({ golden }) => (golden ? `4rem 0` : `4rem 0 0`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ golden }) => golden && `color: var(--textInverse-color);`}
`
const InnerContent = styled.div`
  ${({ accentTop, accentBottom }) => {
    if (accentTop && accentBottom) {
      return `padding: 3rem 0;`
    }
    if (accentTop) {
      return `padding-top: 3rem;`
    }
    if (accentBottom) {
      return `padding-bottom: 3rem;`
    }
  }}
  text-align: ${({ centered }) => (centered ? 'center' : 'inherit')};
`
const Description = styled.div`
  width: 80%;
  max-width: 80%;
  margin: 0 auto;
  & h2 {
    font-size: 2.2rem;
    font-family: var(--serif-font);
    margin-bottom: 2rem;
    font-weight: normal;
    color: ${({ golden }) => (golden ? 'var(--textInverse-color)' : 'var(--subheading-color)')};
  }
  & h4 {
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2rem;
    color: ${({ golden }) => (golden ? 'var(--textInverse-color)' : 'var(--text-color)')};
  }
  & p {
    /* margin-bottom: 2.5rem; */
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: ${({ golden }) => (golden ? 'var(--textInverse-color)' : 'var(--text-color)')};
  }
  @media (max-width: ${({ theme }) => theme.mq.md}px) {
    width: 100%;
    max-width: 100%;
    padding: 10px;
  }
`
