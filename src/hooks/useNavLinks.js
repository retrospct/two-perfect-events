// import { useStaticQuery, graphql } from 'gatsby'

// export const useNavLinks = () => {
//   const {
//     nav: { routes },
//   } = useStaticQuery(graphql`
//     query NavLinksStaticQuery {
//       nav: allDatoCmsNavLink(sort: { fields: position }) {
//         routes: edges {
//           node {
//             text
//             path
//             position
//             id
//             originalId
//             partiallyActive
//           }
//         }
//       }
//     }
//   `)
//   return routes
// }
