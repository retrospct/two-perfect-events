import React from 'react'
import { Link } from 'gatsby'
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
            {card.linkTo ? (
              <Link to={card.linkTo}>
                <Img fixed={card.image.fixed} alt={card.image.alt} />
                <h4>{card.title}</h4>
              </Link>
            ) : (
              <>
                <Img fixed={card.image.fixed} alt={card.image.alt} />
                <h4>{card.title}</h4>
              </>
            )}
            {/* <h4>{card.title}</h4> */}
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
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 10px;
  }
`
const Card = styled.div`
  /* min-width: 360px; */
  text-align: center;
  & h4 {
    font-family: var(--serif-font);
    font-size: 1.4rem;
    margin-top: 1.5rem;
    color: var(--subheading-color);
  }
  & p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
`
