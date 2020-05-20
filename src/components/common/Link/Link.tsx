/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

export const Link = (props) => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      textDecoration: 'none',
      color: 'inherit',
      '&.active': {
        color: 'primary',
      },
      '&:hover': {
        color: 'secondary',
      },
    }}
  />
)
// import styled from 'styled-components'
// import { Link as GatsbyLink } from 'gatsby'

// const Link = styled(GatsbyLink)`
//   margin-top: 20px;
//   display: block;
//   color: white;
//   text-decoration: none;
//   :hover {
//     text-decoration: underline;
//   }
// `

// export { Link }
