import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  text-align: center;
  p {
    font-size: 1.75rem;
    color: var(--accent-color);
    margin-bottom: 3rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`