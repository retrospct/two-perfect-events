import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Button, Link } from 'components/common'
import { Wrapper, TextBlock, ImgBlock, MoreLinks } from './styles'

export const ImageText = ({ block }) => (
  <Wrapper as={Container}>
    <ImgBlock>
      <GatsbyImage image={block.childImageSharp.gatsbyImageData} alt={block.image.alt} />
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
