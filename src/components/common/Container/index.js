import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 98%;

  ${({ theme }) =>
    theme.mq &&
    `@media (min-width: ${theme.mq.sm + 1}px) {
    width: 95%;
  }
  @media (min-width: ${theme.mq.lg + 1}px) {
    width: 88%;
  }`}/* @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  } */
`
