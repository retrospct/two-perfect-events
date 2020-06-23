import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import { Container, ButtonOutline, Link } from 'components/common'
import { Wrapper, TextBlock, ImgBlock, MoreLinks } from './styles'

export const TextImage = ({ block }) => (
  <Wrapper as={Container}>
    <TextBlock>
      <div dangerouslySetInnerHTML={{ __html: block.text }} />
      {block.ctaButton && block.ctaButtonText && (
        <ButtonOutline as={GatsbyLink} to={block.ctaButton.path}>
          {block.ctaButtonText}
        </ButtonOutline>
      )}
      {block.links && (
        <MoreLinks>
          {block.links.map(link => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </MoreLinks>
      )}
    </TextBlock>
    <ImgBlock>
      <Img fluid={block.image.fluid} alt={block.image.alt} />
    </ImgBlock>
  </Wrapper>
)
