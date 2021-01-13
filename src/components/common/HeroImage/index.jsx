import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { Container } from 'components/common'

export const HeroImage = ({ title, subtitle, image }) => {
  return (
    <Wrapper>
      {(title || subtitle) && (
        <Overlay>
          <Container className="hero-overlay">
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
          </Container>
        </Overlay>
      )}
      {image && <Img fluid={image.fluid} alt={image.alt} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  max-height: 800px;
  &:before {
    content: '';
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  & .gatsby-image-wrapper {
    min-height: 420px;
    max-height: 800px;
  }
  & img {
    min-height: 420px;
    max-height: 800px;
  }
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  & .hero-overlay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 1rem;
    word-wrap: break-word;
    h3 {
      font-size: 2.4rem;
      color: var(--accentLight-color);
      text-align: left;
      text-transform: uppercase;
    }
    p {
      font-size: 1.4rem;
      font-weight: 300;
      text-align: left;
      line-height: 1.1;
      color: var(--textInverse-color);
      margin-bottom: 1rem;
    }
  }
`
