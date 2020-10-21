// import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

// import { useTheme } from 'context/themeContext'
// import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

// import { Layout, Seo, Header, Footer } from 'components/common'

// const Blog = ({ data }) => {
//   const siteSeo = useSiteDatoMeta()
//   const { prevTheme, currentTheme, toggleTheme } = useTheme()
//   useEffect(() => {
//     if (currentTheme === 'superDark') toggleTheme(prevTheme)
//   }, [])
//   return (
//   <Layout>
//     <Header />
//     <Seo siteSeo={siteSeo} pageSeo={data.blog.seoMetaTags} />
//     {/* <HelmetDatoCms seo={about.seoMetaTags} /> */}
//     {/* <article className="sheet">
//       <div className="sheet__inner">
//         <h1 className="sheet__title">{data.about.title}</h1>
//         <p className="sheet__lead">{data.about.subtitle}</p>
//         <div className="sheet__gallery">
//           <Img fluid={data.about.photo.fluid} />
//         </div>
//         <div
//           className="sheet__body"
//           dangerouslySetInnerHTML={{
//             __html: data.about.bioNode.childMarkdownRemark.html,
//           }}
//         />
//       </div>
//     </article> */}
//     <h2>Blog</h2>
//     <Footer links={data.footer.links} serving={data.footer.serving} copyright={data.footer.copyright} />
//   </Layout>
// )}

// export default Blog

// // export const query = graphql`
// //   query AboutQuery {
// //     siteSeo: datoCmsSite {
// //       domain
// //       globalSeo {
// //         siteName
// //         titleSuffix
// //         twitterAccount
// //         facebookPageUrl
// //         fallbackSeo {
// //           title
// //           description
// //           image {
// //             url
// //           }
// //           twitterCard
// //         }
// //       }
// //       faviconMetaTags {
// //         ...GatsbyDatoCmsFaviconMetaTags
// //       }
// //     }
// //     about: datoCmsAbout {
// //       seoMetaTags {
// //         ...GatsbyDatoCmsSeoMetaTags
// //       }
// //       title
// //       subtitle
// //       photo {
// //         fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
// //           ...GatsbyDatoCmsSizes
// //         }
// //       }
// //       bioNode {
// //         childMarkdownRemark {
// //           html
// //         }
// //       }
// //     }
// //   }
// // `