import React from 'react'
import GatsbyLink from 'gatsby-link'
import styled from 'styled-components'

import { Button, Divider, Container } from 'components/common'
import { YelpReviews } from './YelpReviews'

export const WeddingsBlock = ({ blocks }) => (
  <>
    {blocks.map((block) => (
      <section key={block.id}>
        {block.model.apiKey === 'cta_button' && <CtaButton block={block} />}
        {block.model.apiKey === 'divider' && <DividerBlock block={block} />}
        {block.model.apiKey === 'process_card' && <div>{block.title}</div>}
        {block.model.apiKey === 'section' && <SectionBlock block={block} />}
        {block.model.apiKey === 'service_card' && <div>{block.heading}</div>}
        {block.model.apiKey === 'testimonial' && <div>{block.title}</div>}
        {block.model.apiKey === 'text' && <div dangerouslySetInnerHTML={{ __html: block.statement }} />}
        {block.model.apiKey === 'yelp_review' && <YelpReviews block={block} />}
      </section>
    ))}
  </>
)

const SectionBlock = ({ block }) => (
  <Container golden={block.golden}>
    {block.accentTop && <Divider />}
    {block.heading && <h3>{block.heading}</h3>}
    {block.description && <div dangerouslySetInnerHTML={{ __html: block.description }} />}
    <CtaButton block={block} />
    {block.accentBottom && <Divider />}
  </Container>
)

const CtaButton = ({ block }) =>
  block.ctaText &&
  block.ctaLinkTo && (
    <>
      {block.externalLink ? (
        <Button as="a" href={block.ctaLinkTo} target="_blank" rel="noopener noreferrer">
          {block.ctaText}
        </Button>
      ) : (
        <Button as={GatsbyLink} to={block.ctaLinkTo}>
          {block.ctaText}
        </Button>
      )}
    </>
  )

const DividerBlock = ({ block }) => (
  <Content>
    <Divider />
  </Content>
)

const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FluidContent = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`
const FluidContainer = styled.div`
  width: 100%;
  background: var(--accent-color);
`
