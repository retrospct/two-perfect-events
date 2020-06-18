import React from 'react'
import Img from 'gatsby-image'

export const HeroImage = ({ block }) => {
  return (
    <div>
      <div>{block.heading}</div>
      <div>{block.text}</div>
      <Img fluid={block.image.fluid} alt={block.image.alt} />
    </div>
  )
}
