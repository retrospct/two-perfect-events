import React from 'react'
import styled from 'styled-components'

export const NavSpacer = ({ children }) => <MainContent>{children}</MainContent>

const MainContent = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 88px;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    padding-top: 69px;
  }
`
