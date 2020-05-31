// /* eslint react/destructuring-assignment: 0 */
// import classnames from 'classnames'
// import React from 'react'
// import { HeroHeadings } from '../../elements/HeroHeadings'
// import { containerMaxWidth, mq, Color, LightThemeColor } from '../../utils'

// import { IAuxContentLayout, IProps } from './index'
// import styles from './styles.scss'

// export class Hero extends React.PureComponent<IProps> {
//   render() {
//     const {
//       eyebrow,
//       headline,
//       headline2,
//       subheading,
//       layout,
//       renderMainContent,
//       media,
//       bgColor = '#FFFFFF',
//       bottomTexture = false,
//     } = this.props

//     const hasAuxContent = media && Object.keys(media).includes('renderAuxContent')

//     const themeNames: Record<LightThemeColor, string> = {
//       [Color.Coral]: 'coral',
//       [Color.Tan]: 'tan',
//       [Color.Teal]: 'teal',
//       [Color.White]: 'white',
//       [Color.Yellow]: 'yellow',
//     }

//     const heroWrapper = classnames({
//       'hero-wrapper': true,
//       'one-column': layout.leftAlign,
//       'two-columns': !layout.leftAlign,
//       [`hero-wrapper--${themeNames[bgColor]}`]: !!bgColor,
//       'hero--bottom-texture': !!bottomTexture,
//     })
//     const contentClasses = classnames({
//       content: true,
//       'left-align': layout.leftAlign,
//     })
//     const auxClasses = classnames({
//       'background-aux-content': hasAuxContent && (media as IAuxContentLayout).isBackground,
//       'foreground-aux-content': hasAuxContent && !(media as IAuxContentLayout).isBackground,
//     })

//     return (
//       <div className={heroWrapper}>
//         <div className="hero">
//           <div className={contentClasses}>
//             <HeroHeadings
//               eyebrow={eyebrow}
//               headline={headline}
//               headline2={headline2}
//               subheading={subheading}
//               largeFont={!layout.compact && !layout.leftAlign}
//             />
//             {renderMainContent && renderMainContent()}
//           </div>
//           {hasAuxContent && (
//             <div className={auxClasses}>{(media as IAuxContentLayout).renderAuxContent()}</div>
//           )}
//         </div>
//         <style jsx>
//           {`
//             .hero-wrapper {
//               display: grid;
//               grid-template-columns: [left-gutter] 1fr [content] 12fr [right-gutter] 1fr;
//               justify-content: center;
//               padding: ${layout.compact ? '0' : '50px'} 0;
//             }
//             .hero {
//               grid-column: content;
//               position: relative;
//               display: grid;
//               grid-template-columns: [left-content] 7fr [right-content-sm] 1fr [right-content-lg] 5fr;
//               grid-column-gap: 24px;
//               align-content: center;
//               justify-items: center;
//             }
//             .one-column .hero {
//               max-width: ${containerMaxWidth};
//               margin: 0 auto;
//             }
//             .content {
//               display: grid;
//               text-align: center;
//               justify-items: center;
//               align-content: center;
//               z-index: 1;
//               position: relative;
//             }
//             .content {
//               grid-column: left-content / span 3;
//             }
//             .foreground-aux-content {
//               grid-column: left-content / span 3;
//             }
//             .background-aux-content {
//               display: none;
//             }
//             @media (${mq.tablet}) {
//               .hero-wrapper {
//                 padding: ${layout.compact ? `0px` : `50px`} 0;
//               }
//               .hero-wrapper.two-columns {
//                 grid-template-columns: [content] 14fr;
//               }
//               .two-columns .hero {
//                 grid-template-columns: 1fr [left-content] 7fr [right-content-sm] 1fr [right-content-lg] 5fr 1fr;
//               }
//               .left-align {
//                 justify-items: left;
//                 justify-self: left;
//                 text-align: unset;
//               }
//               .content {
//                 grid-column: left-content;
//               }
//               .two-columns .content {
//                 grid-column: left-content / span 3;
//               }
//               .foreground-aux-content {
//                 grid-column: right-content-sm / span 2;
//               }
//               .background-aux-content {
//                 display: block;
//                 background-position: right bottom;
//                 background-repeat: no-repeat;
//                 background-size: cover;
//                 bottom: 0;
//                 right: 0;
//                 overflow: hidden;
//                 position: absolute;
//                 z-index: 0;
//               }
//               .two-columns .background-aux-content {
//                 max-width: 1600px;
//                 background-position: center bottom;
//                 right: auto;
//               }
//             }
//             @media (min-width: 1441px) {
//               .hero-wrapper {
//                 padding: ${layout.compact ? '0' : layout.leftAlign ? `50px` : `100px`} 0;
//               }
//             }
//           `}
//         </style>
//         <style jsx>{styles}</style>
//       </div>
//     )
//   }
// }
