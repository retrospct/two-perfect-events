import React from 'react'
import {Heading} from 'components/common'
import { Wrapper, Description } from './styles'

export const HeadingDescription = ({ block }) => {
  return (
    <Wrapper>
      {block.accentTop && <hr />}
      <Heading>{block.heading && <h3>{block.heading}</h3>}</Heading>
      {block.descriptionNode?.childMarkdownRemark?.html && <Description><div dangerouslySetInnerHTML={{ __html: block.descriptionNode.childMarkdownRemark.html }} /></Description>}
      {block.accentBottom && <hr />}
    </Wrapper>
  )
}