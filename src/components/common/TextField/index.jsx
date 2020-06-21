import styled from 'styled-components'

export const TextField = styled.textarea`
  /* position: relative; */
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--primary-color);
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;

  ${({ error }) =>
    error &&
    `
		border-color: var(--error-color);
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`
