import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid var(--primary-color);
  padding: 0.8rem 1rem;
  border-radius: 0;
  /* border-radius: 7px; */
  margin-bottom: 0.3rem;
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

export const InputContrast = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid var(--textLight-color);
  padding: 0.5rem 0.1rem;
  border-radius: 0;
  /* border-radius: 7px; */
  /* margin-top: 0.5rem; */
  margin-bottom: 0.3rem;
  transition: 0.3s;
  background: var(--accent-color);
  ${({ error }) =>
    error &&
    `
		border-color: var(--error-color);
	`}

  &::placeholder {
    color: #c8c8c8;
  }
`
export const InputContact = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: ${(props) => (props.contrast ? 'none' : '2px solid var(--primary-color)')};
  border-bottom: ${(props) => (props.contrast ? '2px solid var(--textLight-color)' : '2px solid var(--primary-color)')};
  padding: 0.5rem 0.1rem;
  border-radius: 0;
  margin-bottom: 0.3rem;
  transition: 0.3s;
  background: ${(props) => (props.contrast ? 'var(--accent-color)' : 'inherit')};
  ${({ error }) =>
    error &&
    `
		border-color: var(--error-color);
	`}

  &::placeholder {
    color: #c8c8c8;
  }
`
