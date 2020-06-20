import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import { Container, ButtonOutline, Link } from 'components/common'
import { Wrapper, SkillsWrapper, Details, Thumbnail, MoreLinks } from './styles'

export const ImageText = ({ block }) => (
  <Wrapper>
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <Img fluid={block.image.fluid} alt={block.image.alt} />
      </Thumbnail>
      <Details>
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
      </Details>
    </SkillsWrapper>
  </Wrapper>
)

// {/* <Button as={AnchorLink} href="#contact">
//   Contact Us
// </Button> */}
