import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
