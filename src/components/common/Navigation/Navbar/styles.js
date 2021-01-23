import styled from 'styled-components'

export const Wrapper = styled.div`
  /* padding: 0.5rem 0 0; */
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  position: relative;
  height: 88px;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    height: 69px;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 100%;
    align-items: flex-start;
  }
`

export const LogoWrapper = styled.div`
  flex: 1;
  padding: 0;
  & svg {
    height: 100%;
    max-width: 420px;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    & svg {
      max-width: 280px;
    }
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    padding: 0.5rem 0 0.5rem 0.25rem;
    & svg {
      max-width: 400px;
    }
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    padding: 0.25rem 0 0 0.25rem;
    & svg {
      max-width: 60px;
    }
  }
`
