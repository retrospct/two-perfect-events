import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, Gallery } from 'components/common'

export const Highlight = ({ block }) => {
  return (
    <Content>
      {/* <Divider /> */}
      {/* <Heading style={{ marginTop: '3rem' }}>{block.title || 'Features'}</Heading> */}
      <Gallery size="200px" columns={5} gap={60}>
        {block.features.map((feature) =>
          feature?.linkTo ? (
            <Linked key={feature.id} href={feature.linkTo} target="_blank" rel="noopener noreferrer">
              <Img fixed={feature.badge.fixed} alt={feature.badge.alt} />
            </Linked>
          ) : (
            <Img key={feature.id} fixed={feature.badge.fixed} alt={feature.badge.alt} />
          )
        )}
      </Gallery>
    </Content>
  )
}

const Content = styled(Container)`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
// const Heading = styled.h1`
//   font-family: var(--serif-font);
//   font-weight: 300;
//   font-size: 2.5rem;
//   color: var(--accent-color);
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
// `
const Linked = styled.a`
  transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`
