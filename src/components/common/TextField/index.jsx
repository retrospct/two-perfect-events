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

export const TextFieldContrast = styled.textarea`
  /* position: relative; */
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--textLight-color);
  padding: 0.8rem 1rem;
  /* border-radius: 7px; */
  /* margin-top: 0.5rem; */
  margin-bottom: 0.5rem;
  transition: 0.3s;
  background: var(--accent-color);

  ${({ error }) =>
    error &&
    `
		border-color: var(--error-color);
	`}

  &::placeholder {
    color: #a7a7a7;
  }
`
