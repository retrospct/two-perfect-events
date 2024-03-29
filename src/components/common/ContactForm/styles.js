import styled from 'styled-components'

export const FormField = styled.div`
  margin-bottom: 1rem;
`
export const FormFieldSplit = styled.div`
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
  justify-content: flex-start;
`
export const FormFieldOneCol = styled.div`
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  justify-content: flex-start;
`

export const Label = styled.label`
  font-size: 1.25rem;
  line-height: 1.2;
  color: ${(props) => (props.contrast ? 'var(--textLight-color)' : 'black')};
`

export const ErrorMessage = styled.span`
  color: var(--error-color);
  margin-bottom: 1.5rem;
`
