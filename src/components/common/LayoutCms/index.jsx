// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// // import { HelmetDatoCms } from 'gatsby-source-datocms'
// import { Footer } from 'components/common'
// // import { Link } from '../Link'

// // TODO: Combine this into the Seo component

// export const LayoutCMS = ({ children }) => {
//   // const [showMenu, setShowMenu] = useState(false)
//   return (
//     <StaticQuery
//       query={graphql`
//         query LayoutQuery {
//           datoCmsSite {
//             globalSeo {
//               siteName
//             }
//             # faviconMetaTags {
//             #   ...GatsbyDatoCmsFaviconMetaTags
//             # }
//           }
//           # datoCmsHome {
//           #   seoMetaTags {
//           #     ...GatsbyDatoCmsSeoMetaTags
//           #   }
//           #   # introTextNode {
//           #   #   childMarkdownRemark {
//           #   #     html
//           #   #   }
//           #   # }
//           #   copyright
//           # }
//           allDatoCmsSocialLink(sort: { fields: [position], order: ASC }) {
//             edges {
//               node {
//                 profileType
//                 url
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         <>
//           {/* <HelmetDatoCms seo={data.datoCmsHome.seoMetaTags} /> */}
//           {children}
//           <Footer />
//         </>
//       )}
//     />
//   )
// }
