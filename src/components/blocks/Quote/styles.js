import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 1rem;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  p {
    font-size: 1.4rem;
    font-family: 'Crimson Pro';
    font-weight: 300;
    font-style: italic;
    max-width: 800px;
    line-height: 1.87;
    text-align: center;
    word-wrap: break-word;
  }
  small {
  }
  hr {
    border: 0;
    margin: 10px 0;
    width: 270px;
    height: 5px;
    background: var(--accent-color);
  }
  /* @media (max-width: 960px) {
  } */
`
