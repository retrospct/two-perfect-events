import styled from 'styled-components'

export const FormField = styled.div`
  margin-bottom: 1rem;
`
export const FormFieldSplit = styled.div`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3rem;
  justify-content: flex-start;
`

export const Label = styled.label`
  font-size: 1.66rem;
  line-height: 1.5;
  color: inherit;
`

export const ErrorMessage = styled.span`
  color: var(--error-color);
`

// export const Center = styled.div`
//   text-align: left;

//   h4 {
//     font-weight: normal;
//   }
// `

// export const InputField = styled.input`
//   position: relative;
//   margin-bottom: 1rem;
// `
// export const TextField = styled.textarea`
//   position: relative;
//   margin-bottom: 1rem;
// `
