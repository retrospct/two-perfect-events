import React from 'react'
// import featherSprite from './feather-sprite.svg'
import featherUrl from './feather-sprite.svg'
// import * as featherSprite from './feather-sprite.svg'

interface Props {
  name: string
  color: string
  size: number
  // restProps: any
}

export const FeatherIcon: React.FC<Props> = ({
  name,
  color = 'currentColor',
  size = 24,
  // ...restProps
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    // {...restProps}
  >
    <use xlinkHref={`${featherUrl}#${name}`} />
  </svg>
)

// export default FeatherIcon

// import React from 'react'
// import FeatherIcon from '../components/FeatherIcon'

// export default () => (
//   <FeatherIcon
//     name="circle"
//   />
// )
