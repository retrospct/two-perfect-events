import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header } from 'components/common'

const Contact = ({ data }) => {
  const siteSeo = useSiteDatoMeta()

  return (
    <Layout footer={data.footer}>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.contact.seoMetaTags} />
      <article className="sheet">
        <div className="sheet__inner">
          <h1 className="sheet__title">{data.contact.title}</h1>
          <p className="sheet__lead">{data.contact.subtitle}</p>
          <div className="sheet__gallery">
            <Img fluid={data.contact.photo.fluid} />
          </div>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: data.contact.bioNode.childMarkdownRemark.html,
            }}
          />
        </div>
      </article>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query ContactQuery {
    contact: datoCmsAbout {
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
    footer: datoCmsFooter {
      links {
        id
        icon {
          originalId
          alt
          url
        }
        title
        linkText
        linkUrl
      }
      serving
      copyright
    }
  }
`
