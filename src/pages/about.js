import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Header, Connect } from 'components/common'

const About = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()

  return (
    <Layout location={location} footer={data.footer}>
      <Header />
      <Seo siteSeo={siteSeo} pageSeo={data.about.seoMetaTags} />
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
      {data.about.connectEnabled && <Connect />}
    </Layout>
  )
}

export default About

export const query = graphql`
  query AboutQuery {
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
      connectEnabled
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
