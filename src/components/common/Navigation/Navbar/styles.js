import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1920px;
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 100%;
    padding-top: 1rem;
  }
`

export const LogoWrapper = styled.div`
  flex: 1;
  align-self: flex-start;
  & svg {
    height: 80px;
    max-width: 420px;
    @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
      height: 44px;
      max-width: 280px;
    }
    @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
      height: 90px;
      max-width: 90px;
    }
  }
`
