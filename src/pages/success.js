import React from 'react'
import { graphql } from 'gatsby'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'

import { Layout, Seo, NavSpacer } from 'components/common'
import partyItems from 'assets/illustrations/partyItems.svg'

const Success = ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Seo siteSeo={siteSeo} pageSeo={data.success.seoMetaTags} />
      {/* <div aria-hidden style={{ height: 100, width: '100%', background: 'transparent' }} /> */}
      <NavSpacer>
        <div id="success" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>We'll get back to you asap!</h1>
              </header>
              <span className="image main">
                <img src={partyItems} alt="" />
              </span>
              <p>Thank you for contacting us.</p>
            </div>
          </section>
        </div>
      </NavSpacer>
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
