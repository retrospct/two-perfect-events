import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  @media (max-width: var(--screens-xxl)) {
    max-width: 100%;
    padding-top: 1rem;
  }
  /* @media (max-width: ${({ theme }) => `${theme.mq.xxl}px`}) {
    max-width: 100%;
    padding-top: 1rem;
  } */
`

export const LogoWrapper = styled.div`
  flex: 1;
  /* max-width: 500px;
  @media (max-width: ${({ theme }) => `${theme.mq.xxl}px`}) {
    max-width: 90px;
  } */
  & svg {
    height: 80px;
    max-width: 500px;
    /* @media (max-width: ${({ theme }) => `${theme.mq.xxl}px`}) {
      max-width: 90px;
    } */
    @media (max-width: var(--screens-xxl)) {
      max-width: 90px;
    }
  }
`
