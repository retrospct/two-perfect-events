import React from 'react'
import styled from 'styled-components'

const marginMap = {
  xs: 24,
  sm: 60,
  md: 80,
  lg: 100,
  xl: 130,
  xxl: 150,
}

const mobileMarginMap = {
  xs: 24,
  sm: 60,
  md: 80,
  lg: 100,
  xl: 120,
  xxl: 160,
}

function getMargin(size) {
  return size ? marginMap[size] : 0
}

function getMobileMargin(size) {
  return size ? mobileMarginMap[size] : 0
}

export const Section = ({ mt, mb, children, className }) => (
  <SectionContainer mt={mt} mb={mb} className={className}>
    {children}
  </SectionContainer>
)

export const SectionContainer = styled.section`
  margin-top: ${props => getMobileMargin(props.mt)}px;
  margin-bottom: ${props => getMobileMargin(props.mb)}px;
  @media (${props => `min-width: ${props.theme.screens.md}`}) {
    margin-top: ${props => getMargin(props.mt)}px;
    margin-bottom: ${props => getMargin(props.mb)}px;
  }
`
// /* margin-bottom: ${props => `${getMobileMargin(props.bottomMargin)}px`}; */

// // <style jsx>
//         {`
//           section {
//             margin-top: ${getMobileMargin(topMargin)}px;
//             margin-bottom: ${getMobileMargin(bottomMargin)}px;
//           }
//           @media (${mq.tablet}) {
//             section {
//               margin-top: ${getMargin(topMargin)}px;
//               margin-bottom: ${getMargin(bottomMargin)}px;
//             }
//           }
//         `}
//       </style>
