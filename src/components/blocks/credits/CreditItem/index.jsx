import React from 'react'
import { Item, ItemVendor } from './styles'

export const CreditItem = ({ block }) => (
  <div>
    {block.location && (
      <span>
        <Item>
          {block.location}:{' '}
          {block.vendorName && block.vendorLink ? (
            <a href={block.vendorLink} target="_blank">
              {block.vendorName}
            </a>
          ) : (
            block.vendorName
          )}
        </Item>
      </span>
    )}
    {!block.location && block.vendorName && (
      <span>
        <ItemVendor>
          {block.vendorName && block.vendorLink ? (
            <a href={block.vendorLink} target="_blank">
              {block.vendorName}
            </a>
          ) : (
            block.vendorName
          )}
        </ItemVendor>
      </span>
    )}
  </div>
)

