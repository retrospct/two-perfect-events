// import React from 'react'
// // import Img from 'gatsby-image'
// import { Container, ContactForm, Icon, IconSquiggly } from 'components/common'
// import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'
// import { Fluid, Wrapper, ContactBlock, Spotlight, Header } from './styles'

// export const Contact = ({ block }) => {
//   const {
//     name,
//     nameRequired,
//     email,
//     emailRequired,
//     phone,
//     phoneRequired,
//     eventDate,
//     eventDateRequired,
//     additionalInfo,
//     additionalInfoRequired,
//   } = block
//   return (
//     <Fluid id="contact">
//       <Wrapper as={Container}>
//         <ContactBlock>
//           {block.squigglyIcon && (
//             <Spotlight>
//               <Icon>
//                 <IconSquiggly alt="Arrow pointing towards let's get this party started" />
//               </Icon>
//             </Spotlight>
//           )}
//           {block.heading && (
//             <Header>
//               <h3>{block.heading}</h3>
//             </Header>
//           )}
//           <ContactForm
//             config={{
//               name,
//               nameRequired,
//               email,
//               emailRequired,
//               phone,
//               phoneRequired,
//               eventDate,
//               eventDateRequired,
//               additionalInfo,
//               additionalInfoRequired,
//             }}
//           />
//         </ContactBlock>
//         {/* <ImgBlock>
//         <Img fixed={image.fixed} alt={image.alt} />
//       </ImgBlock> */}
//       </Wrapper>
//     </Fluid>
//   )
// }
