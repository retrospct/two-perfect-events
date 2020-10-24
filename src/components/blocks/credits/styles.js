import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 4rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  text-align: center;
  & p {
    font-size: 1.5rem;
    color: var(--accent-color);
    margin-bottom: 2rem;
    letter-spacing: 0.2rem;
    cursor: pointer;
  }
  & p:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`

// export const IconImg = styled.img`
//   padding: 0 0 3px 5px;
// `
