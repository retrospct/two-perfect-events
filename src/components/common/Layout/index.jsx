import React from 'react'
import styled from 'styled-components'
import { Footer } from 'components/common'

export const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

// const GridLayout = styled.div`
//   height: 100vh;
//   display: grid;
//   grid-template-columns: 86px 1fr;
//   grid-template-areas:
//     'header header'
//     'main main'
//     'footer footer';
//   grid-gap: 1rem;

//   @media (min-width: ${({ theme }) => theme.mq.lg}px) {
//     grid-template-columns: 500px 1fr;
//   }

//   header {
//     grid-area: header;
//   }

//   main {
//     grid-column: main;
//   }

//   aside {
//     grid-row: sidebar;
//   }

//   footer {
//     grid-column: footer;
//   }
// `
