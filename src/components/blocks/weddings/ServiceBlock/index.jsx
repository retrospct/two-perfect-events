import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container } from 'components/common'

export const ServiceBlock = ({ block }) => (
  <Content>
    {block.heading && <h2>{block.heading}</h2>}
    {block.description && <div dangerouslySetInnerHTML={{ __html: block.description }} />}
    {block.cards && (
      <Cards>
        {block.cards.map((card) => (
          <Card key={card.id}>
            <Img fixed={card.image.fixed} alt={card.image.alt} />
            <h4>{card.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: card.body }} />
          </Card>
        ))}
      </Cards>
    )}
  </Content>
)

const Content = styled(Container)`
  width: 100%;
  padding: 0 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Cards = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: center;
  align-items: flex-start;
`
const Card = styled.div`
  text-align: center;
`
