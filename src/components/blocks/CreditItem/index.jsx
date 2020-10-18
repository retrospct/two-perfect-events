import React from 'react'
import { Container } from 'components/common'
import { Wrapper, Flex, Title } from './styles'

export const CreditItem = ({ block }) => (
  <div>
    {block.location && (
      <span>
        <p>
          {block.location}:{' '}
          {block.vendorName && block.vendorLink ? (
            <a href={block.vendorLink} target="_blank">
              {block.vendorName}
            </a>
          ) : (
            block.vendorName
          )}
        </p>
      </span>
    )}
    {!block.location && block.vendorName && (
      <span>
        <p>
          {block.vendorName && block.vendorLink ? (
            <a href={block.vendorLink} target="_blank">
              {block.vendorName}
            </a>
          ) : (
            block.vendorName
          )}
        </p>
      </span>
    )}
  </div>
)

// export const CreditItem = ({ block }) => {
//   return (
//     <Wrapper>
//       <Flex as={Container}>
//           {block.location && <span><p>{block.location}: {block.vendorName && block.vendorLink ? <a href={block.vendorLink} target="_blank">{block.vendorName}</a> : block.vendorName}</p></span>}
//           {(!block.location && block.vendorName) && <span><p>{block.vendorName && block.vendorLink ? <a href={block.vendorLink} target="_blank">{block.vendorName}</a> : block.vendorName}</p></span>}
//       </Flex>
//     </Wrapper>
//   )
// }
