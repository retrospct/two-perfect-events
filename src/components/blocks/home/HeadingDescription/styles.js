import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  & h3 {
    text-align: center;
    padding: 0;
    margin: 3rem 0 1.45rem;
    font-family: 'Crimson Text', 'Lucida Grande', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: var(--accent-color);
    font-weight: 300;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
    font-size: 2.4rem;
    line-height: 1.1;
  }
  & hr {
    border: 0;
    margin: 10px 0;
    width: 270px;
    height: 3px;
    background: var(--accent-color);
  }
`

export const Description = styled.div`
  max-width: 1000px;
  margin-bottom: 1rem;
  text-align: center;
  & div p {
    /* font-size: 1.45rem;
    color: var(--text-inverse-color); */
    text-align: center;
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
`
