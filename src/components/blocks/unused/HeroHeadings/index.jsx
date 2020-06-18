// import React from 'react'
// import { mq } from '../../utils'
// import { Text } from '../Text'
// import { IProps } from './index'

// export class HeroHeadings extends React.PureComponent<IProps> {
//   render() {
//     const { eyebrow, headline, headline2, largeFont, subheading } = this.props
//     return (
//       <>
//         {eyebrow && (
//           <div className="eyebrow">
//             <Text size="md+">{eyebrow}</Text>
//           </div>
//         )}
//         <h1 className="headline">
//           <Text size={largeFont ? 'heading+' : 'heading'}>{headline}</Text>
//         </h1>
//         {headline2 && (
//           <h1 className="headline2">
//             <Text size={largeFont ? 'heading+' : 'heading'}>{headline2}</Text>
//           </h1>
//         )}
//         {subheading && (
//           <div className="subheading">
//             <Text size="lg">{subheading}</Text>
//           </div>
//         )}
//         <style jsx>
//           {`
//             .eyebrow {
//               margin-bottom: 14px;
//             }
//             .headline {
//               max-width: 1024px;
//               margin-bottom: ${headline2 ? '5px' : subheading ? '16px' : '24px'};
//               margin-top: 0;
//             }
//             .headline2 {
//               max-width: 1024px;
//               margin-bottom: ${subheading ? '16px' : '24px'};
//               margin-top: 0;
//             }
//             .subheading {
//               margin-bottom: 21px;
//             }
//             @media (${mq.tablet}) {
//               .eyebrow {
//                 margin-bottom: 28px;
//               }
//               .headline {
//                 margin-bottom: ${headline2 ? '5px' : subheading ? '24px' : '36px'};
//               }
//               .headline2 {
//                 margin-bottom: ${subheading ? '24px' : '36px'};
//               }
//               .subheading {
//                 margin: var(--margin);
//                 margin-bottom: 36px;
//                 max-width: 800px;
//               }
//             }
//           `}
//         </style>
//       </>
//     )
//   }
// }
