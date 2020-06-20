import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { Layout, Seo, Header } from 'components/common'

const Blog = ({ data }) => (
  <Layout>
    <Header />
    {/* <Seo siteSeo={data.siteSeo} pageSeo={data.about.seoMetaTags} /> */}
    {/* <HelmetDatoCms seo={about.seoMetaTags} /> */}
    {/* <article className="sheet">
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.about.title}</h1>
        <p className="sheet__lead">{data.about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={data.about.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.about.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article> */}
    <h2>Blog</h2>
  </Layout>
)

export default Blog

// export const query = graphql`
//   query AboutQuery {
//     siteSeo: datoCmsSite {
//       domain
//       globalSeo {
//         siteName
//         titleSuffix
//         twitterAccount
//         facebookPageUrl
//         fallbackSeo {
//           title
//           description
//           image {
//             url
//           }
//           twitterCard
//         }
//       }
//       faviconMetaTags {
//         ...GatsbyDatoCmsFaviconMetaTags
//       }
//     }
//     about: datoCmsAbout {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       subtitle
//       photo {
//         fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
//           ...GatsbyDatoCmsSizes
//         }
//       }
//       bioNode {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `

// From demo.js
// import React from 'react'
// import { Link, graphql } from 'gatsby'
// // import Masonry from 'react-masonry-component'
// import Img from 'gatsby-image'
// import { Layout } from 'components/common'

// const IndexPage = ({ data }) => (
//   <Layout>
//     <div className="showcase">
//       {data.allDatoCmsWork.edges.map(({ node: work }) => (
//         <div key={work.id} className="showcase__item">
//           <figure className="card">
//             <Link to={`/works/${work.slug}`} className="card__image">
//               <Img fluid={work.coverImage.fluid} />
//             </Link>
//             <figcaption className="card__caption">
//               <h6 className="card__title">
//                 <Link to={`/works/${work.slug}`}>{work.title}</Link>
//               </h6>
//               <div className="card__description">
//                 <p>{work.excerpt}</p>
//               </div>
//             </figcaption>
//           </figure>
//         </div>
//       ))}
//     </div>
//   </Layout>
// )

// export default IndexPage

// export const query = graphql`
//   query IndexQuery {
//     allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           id
//           title
//           slug
//           excerpt
//           coverImage {
//             fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//               ...GatsbyDatoCmsSizes
//             }
//           }
//         }
//       }
//     }
//   }
// `

// from work.js
// import React from 'react'
// import { HelmetDatoCms } from 'gatsby-source-datocms'
// import Img from 'gatsby-image'
// import { graphql } from 'gatsby'
// import { Layout } from 'components/common'

// const Work = ({ data }) => (
//   <Layout>
//     <article className="sheet">
//       <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
//       <div className="sheet__inner">
//         <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
//         <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
//         <div className="sheet__slider">
//           {data.datoCmsWork.gallery.map(({ fluid }) => (
//             <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
//           ))}
//         </div>
//         <div
//           className="sheet__body"
//           dangerouslySetInnerHTML={{
//             __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
//           }}
//         />
//         <div className="sheet__gallery">
//           <Img fluid={data.datoCmsWork.coverImage.fluid} />
//         </div>
//       </div>
//     </article>
//   </Layout>
// )

// export default Work

// export const query = graphql`
//   query WorkQuery($slug: String!) {
//     datoCmsWork(slug: { eq: $slug }) {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       excerpt
//       gallery {
//         fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
//           src
//         }
//       }
//       descriptionNode {
//         childMarkdownRemark {
//           html
//         }
//       }
//       coverImage {
//         url
//         fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
//           ...GatsbyDatoCmsSizes
//         }
//       }
//     }
//   }
// `
