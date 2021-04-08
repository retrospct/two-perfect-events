import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { ButtonAccent } from 'components/common'
import { Wrapper, Overlay } from './styles'

export const HeroImage = ({ block }) => {
  return (
    <Wrapper>
      {(block.heading || block.text) && (
        <Overlay>
          <div>
            {block.heading && <h3>{block.heading}</h3>}
            {block.text && <p>{block.text}</p>}
            <ButtonAccent>Hello</ButtonAccent>
          </div>
        </Overlay>
      )}
      <GatsbyImage image={block.childImageSharp.gatsbyImageData} alt={block.image.alt} />
    </Wrapper>
  );
}
