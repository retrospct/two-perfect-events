import React from 'react'
import { Item, ItemVendor } from './styles'

export const CreditItem = ({ block }) => {
  const hasCredit = block.credits.length > 0
  const getCredits = () => {
    let creditComponents = []
    for (let i = 0; i < block.credits.length; i++) {
      if (i === block.credits.length - 1) {
        creditComponents.push(
          <a key={block.credits[i].id} href={block.credits[i].referralLink} target="_blank" rel="noopener noreferrer">
            <em>{block.credits[i].name}</em>
          </a>
        )
      } else {
        creditComponents.push(
          <a key={block.credits[i].id} href={block.credits[i].referralLink} target="_blank" rel="noopener noreferrer">
            <em>{block.credits[i].name}</em> |{' '}
          </a>
        )
      }
    }
    return creditComponents
  }
  return (
    <div>
      {block.location && (
        <span>
          <Item>
            {block.location}: {hasCredit ? getCredits() : 'N/A'}
          </Item>
        </span>
      )}
      {!block.location && hasCredit && (
        <span>
          <ItemVendor>{hasCredit ? getCredits() : 'N/A'}</ItemVendor>
        </span>
      )}
    </div>
  )
}
// {block.location && (
//   <span>
//     <Item>
//       {block.location}:
//       {hasCredit
//         ? block.credits.map((credit) => (
//             <a href={credit.referralLink} target="_blank">
//               <em>{credit.name}</em>{multiCredit && ' •'}
//             </a>
//           ))
//         : 'N/A'}
//     </Item>
//   </span>
// )}
