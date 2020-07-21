import styled from 'styled-components'

export const Wrapper = styled.footer`
  padding: 6rem 0 0;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

export const Header = styled.div`
  text-align: center;
  h3 {
    font-size: 1.75rem;
    color: var(--accent-color);
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`
