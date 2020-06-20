import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { Layout, Seo, Header } from 'components/common'

const About = ({ data }) => (
  <Layout>
    <Header />
    <Seo siteSeo={data.siteSeo} pageSeo={data.about.seoMetaTags} />
    {/* <HelmetDatoCms seo={about.seoMetaTags} /> */}
    <article className="sheet">
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
    </article>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    siteSeo: datoCmsSite {
      domain
      globalSeo {
        siteName
        titleSuffix
        twitterAccount
        facebookPageUrl
        fallbackSeo {
          title
          description
          image {
            url
          }
          twitterCard
        }
      }
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    about: datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
