import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, Icon, IconTriangleDown } from 'components/common'

export const ProcessCard = ({ block }) => {
  return (
    <Content>
      <Card>
        <CardContainer>
          <h4>{block.title}</h4>
          <CardContent dangerouslySetInnerHTML={{ __html: block.content }} />
        </CardContainer>
        <div className="process-card-image">
          <Img fluid={block.image.fluid} alt={block.image.alt} />
        </div>
      </Card>
      {!block.lastCard && (
        <Icon color="#BF9000">
          <IconTriangleDown width="80px" height="30px" alt="A gold triangle pointed downwards." />
        </Icon>
      )}
    </Content>
  )
}

const Content = styled(Container)`
  width: 100%;
  padding: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const Card = styled.div`
  width: 95%;
  border: 1px solid var(--accent-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & h4 {
    font-family: var(--serif-font);
    font-size: 2.3rem;
    font-style: oblique;
    font-weight: 200;
    color: var(--subheading-color);
  }
  & .process-card-image {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 500px;
    overflow: hidden;
    order: 2;
  }
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
    & .process-card-image {
      height: 310px;
      max-width: 200px;
      order: 1;
      margin: 1rem 0 0 1rem;
    }
  }
`
const CardContainer = styled.div`
  padding: 2rem;
  flex: 1;
  order: 1;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    padding: 1rem;
    order: 2;
  }
`
const CardContent = styled.div`
  & ul li {
    font-size: 1.1rem;
    line-height: 1.4;
    font-weight: 300;
    /* color: var(--subheading-color); */
  }
`
