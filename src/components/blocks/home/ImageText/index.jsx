import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Button, Link } from 'components/common'
import { Wrapper, TextBlock, ImgBlock, MoreLinks } from './styles'

export const ImageText = ({ block }) => (
  <Wrapper as={Container}>
    <ImgBlock>
      <Img fluid={block.image.fluid} alt={block.image.alt} />
    </ImgBlock>
    <TextBlock>
      <div dangerouslySetInnerHTML={{ __html: block.text }} />
      {block.ctaButton && block.ctaButtonText && (
        <Button as={GatsbyLink} to={block.ctaButton.path}>
          {block.ctaButtonText}
        </Button>
      )}
      {block.links && (
        <MoreLinks>
          {block.links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </MoreLinks>
      )}
    </TextBlock>
  </Wrapper>
)

// import AnchorLink from 'react-anchor-link-smooth-scroll'
// {/* <Button as={AnchorLink} href="#contact">
//   Contact Us
// </Button> */}
