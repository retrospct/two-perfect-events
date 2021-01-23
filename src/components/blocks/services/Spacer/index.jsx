import React from 'react'

export const Spacer = ({ block }) => {
  switch (block.spacerSize) {
    case 'small':
      return <div style={{ padding: '1rem 0', width: '100%' }} />
    case 'medium':
      return <div style={{ padding: '2rem 0', width: '100%' }} />
    case 'large':
      return <div style={{ padding: '4rem 0', width: '100%' }} />
    default:
      return <div style={{ padding: '2rem 0', width: '100%' }} />
  }
}
