import React from 'react'
import styled from 'styled-components'

// export interface IconProps {
//   // text?: string
//   size?: string
//   padding?: string
//   block?: string
//   fontSize?: string
//   color?: string
//   fill?: string
//   badge?: string
//   children?: ReactNode
//   style?: StyleHTMLAttributes<ElementCSSInlineStyle>
// }

// const IconContainer = (props: IconProps) => <div {...props}>{props.children}</div>

export const Icon = styled(({ ...rest }) => <span {...rest} />)`
  /* display: ${(props) => (props.inline ? 'inline-block' : 'inherit')}; */
  & svg {
    width: ${(props) => props.size || '28px'};
    height: ${(props) => props.size || '28px'};
    padding: ${(props) => props.padding || '0'};
    /* vertical-align: middle; */
    display: ${(props) => props.block || 'inline-block'};
    font-size: ${(props) => props.fontSize || '16px'};
    color: ${(props) => props.color || 'currentColor'};
    fill: ${(props) => props.fill || 'none'};
    & #prefix__badge {
      fill: ${(props) => props.badge || 'currentColor'};
    }
  }
`
