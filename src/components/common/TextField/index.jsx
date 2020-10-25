import styled from 'styled-components'

export const TextField = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--primary-color);
  padding: 0.8rem 1rem;
  border-radius: 0;
  /* border-radius: 7px; */
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
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--textLight-color);
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0;
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

export const TextFieldContact = styled.textarea`
  width: 100%;
  font-size: 1.33rem;
  box-sizing: border-box;
  border: ${(props) => (props.contrast ? '2px solid var(--textLight-color)' : '2px solid var(--primary-color)')};
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 0;
  transition: 0.3s;
  background: ${(props) => (props.contrast ? 'var(--accent-color)' : 'inherit')};
  ${({ error }) =>
    error &&
    `
		border-color: var(--error-color);
	`}
  &::placeholder {
    color: #a7a7a7;
  }
`
