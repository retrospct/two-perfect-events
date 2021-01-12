import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1920px;
  /* background: var(--bg-color); */
  /* background: linear-gradient(var(--bg-color), transparent); */
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 100%;
    padding-top: 0.5rem;
  }
`

export const LogoWrapper = styled.div`
  flex: 1;
  align-self: flex-start;
  & svg {
    height: 80px;
    max-width: 420px;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    padding: 0.5rem 0 0;
    & svg {
      height: 44px;
      max-width: 280px;
    }
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    padding: 0.25rem 0 0;
    & svg {
      height: 60px;
      max-width: 400px;
    }
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    padding: 0 0.5rem 0.5rem;
    & svg {
      /* padding: 0.25rem; */
      height: 80px;
      max-width: 80px;
    }
  }
`
