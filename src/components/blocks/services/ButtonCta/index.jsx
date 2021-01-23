import React from 'react'
import GatsbyLink from 'gatsby-link'
import { Button } from 'components/common'

export const ButtonCta = ({ block }) =>
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
