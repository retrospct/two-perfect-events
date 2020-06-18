// import React from 'react'
// import { BUMP_UP, getThemeColors, iconWidth, mq } from '../../utils'
// import { CTALink } from '../CTALink'
// import { CTAButton } from '../CTAButton'
// import { Text } from '../Text'
// import { IProps } from './index'

// export class Card extends React.PureComponent<IProps> {
//   openIntercomMessenger(e: React.MouseEvent) {
//     e.preventDefault()
//     window.Intercom('showNewMessage')
//   }

//   render() {
//     const { title, body, cta, icon, cardColor, openMessenger, alignment, isHiddenOnMobile } = this.props
//     const themeColors = getThemeColors(cardColor)

//     return (
//       <div className="card" key={title}>
//         {icon && <img alt="" src={icon} className="card-icon" />}
//         <h3 className="card-title">
//           <Text size="lg+">{title}</Text>
//         </h3>
//         {body?.trim() && (
//           <p className="card-body">
//             <Text size="body">{body}</Text>
//           </p>
//         )}
//         {cta && (
//           <div className="cta">
//             {openMessenger ? (
//               <CTAButton onClick={this.openIntercomMessenger} text={cta.text} bgColor={themeColors.ctaTheme} />
//             ) : (
//               <CTALink {...cta} bgColor={themeColors.ctaTheme} />
//             )}
//           </div>
//         )}
//         <style jsx>
//           {`
//             .card {
//               padding: ${icon ? '24px 36px' : '48px 36px'};
//               border-radius: 8px;
//               color: ${themeColors.textColor};
//               background-color: ${themeColors.backgroundColor};
//               transform: translate3d(0, 0, 0);
//             }

//             .card-icon {
//               justify-self: ${alignment};
//               width: ${iconWidth}px;
//               margin-bottom: 16px;
//             }

//             .card-title {
//               margin: 0 0 16px;
//             }

//             .card-body {
//               margin-bottom: 48px;
//               line-height: 1.4;
//             }

//             @media (${mq.tablet}) {
//               .card {
//                 display: grid;
//                 border-radius: 8px;
//                 margin-top: 10px; /*  provide space for bump-up */
//                 transition: ${BUMP_UP.TRANSITION};
//               }

//               .card:hover {
//                 transform: ${BUMP_UP.TRANSFORM};
//               }

//               .cta {
//                 margin-top: auto;
//               }
//             }
//             @media (${mq.mobile}) {
//               .card {
//                 display: ${isHiddenOnMobile ? 'none' : 'grid'};
//               }
//             }
//           `}
//         </style>
//       </div>
//     )
//   }
// }
