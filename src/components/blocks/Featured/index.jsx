import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'
import { Container, ButtonOutline, Link } from 'components/common'
import { Wrapper, SkillsWrapper, Details, Thumbnail, MoreLink } from './styles'

export const Featured = ({ block }) => (
  <Wrapper>
    <SkillsWrapper as={Container}>
      {/* <Thumbnail>
        <Img fluid={block.image.fluid} alt={block.image.alt} />
      </Thumbnail> */}
      <Details>
        <h3>{block.heading}</h3>
        {block.badges && block.badges.map(badge => <Img key={badge.originalId} fixed={badge.fixed} alt={badge.alt} />)}
        {/* <div dangerouslySetInnerHTML={{ __html: block.text }} /> */}
        <MoreLink>
          <Link to={block.moreLink.path}>{`>`} MORE</Link>
        </MoreLink>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)

// <Wrapper id="intro">
//   <SkillsWrapper as={Container}>
//     <Thumbnail>
//       <Img fluid={block.image.fluid} alt={block.image.alt} />
//     </Thumbnail>
//     <Details>
//       <div dangerouslySetInnerHTML={{ __html: block.text }} />
//       {block.ctaButton && block.ctaButtonText && (
//         <ButtonOutline as={GatsbyLink} to={block.ctaButton.path}>
//           {block.ctaButtonText}
//         </ButtonOutline>
//       )}
//       {block.links && (
//         <MoreLinks>
//           {block.links.map(link => (
//             <li key={link.id}>
//               <Link to={link.path}>{link.text}</Link>
//             </li>
//           ))}
//         </MoreLinks>
//       )}
//     </Details>
//   </SkillsWrapper>
// </Wrapper>
// )
