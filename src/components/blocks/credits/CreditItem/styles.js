import styled from 'styled-components'

export const Item = styled.h4`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  & a {
    font-weight: 500;
  }
`

export const ItemVendor = styled(Item)`
  font-weight: 500;
`
