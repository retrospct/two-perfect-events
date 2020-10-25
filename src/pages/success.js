import React from 'react'
import { graphql } from 'gatsby'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, Navigation } from 'components/common'
import partyItems from 'assets/illustrations/partyItems.svg'

const Success = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Navigation />
      <Seo siteSeo={siteSeo} pageSeo={data.success.seoMetaTags} />

      <div id="success" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Success/Thank You Page</h1>
            </header>
            <span className="image main">
              <img src={partyItems} alt="" />
            </span>
            <p>Thank you for contacting us!</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Success

export const query = graphql`
  query SuccessQuery {
    success: datoCmsAbout {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      # title
      # subtitle
      # backgroundImage {
      #   fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
      #     ...GatsbyDatoCmsSizes
      #   }
      #   alt
      # }
      # intro
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
