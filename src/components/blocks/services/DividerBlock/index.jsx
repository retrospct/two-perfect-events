import React from 'react'
import styled from 'styled-components'
import { Divider, Container } from 'components/common'

export const DividerBlock = ({ block }) => (
  <Container>
    <Content>
      <Divider />
    </Content>
  </Container>
)

const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
