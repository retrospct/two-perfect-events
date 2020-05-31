import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Link = styled(GatsbyLink)`
  /* color: ${({ theme }) => theme.colors.text || '#212121'}; */
  color: ${({ theme }) => theme.colors.link || '#BF9000'};
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
