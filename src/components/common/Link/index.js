import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Link = styled(GatsbyLink)`
  /* color: ${({ theme }) => theme.colors.text || '#212121'}; */
  /* color: ${({ theme }) => theme.colors.link || '#BF9000'}; */
  color: var(--link-color);
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

export const LinkBase = styled(GatsbyLink)`
  /* color: ${({ theme }) => theme.colors.text || '#212121'}; */
  /* color: ${({ theme }) => theme.colors.link || '#BF9000'}; */
  /* color: var(--link-color); */
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`

export const LinkExternalBase = styled.a`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`
export const LinkExternal = styled(LinkExternalBase)`
  color: var(--text-color);
  :hover {
    color: var(--accent-color);
  }
`
