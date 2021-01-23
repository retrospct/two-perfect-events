import React from 'react'
import { Link, graphql } from 'gatsby'

import { useSiteDatoMeta } from 'hooks/useSiteDatoMeta'
import { Layout, Seo, Container, Connect, NavSpacer } from 'components/common'

export default ({ location, data }) => {
  const siteSeo = useSiteDatoMeta()
  return (
    <Layout location={location} footer={data.footer}>
      <Seo siteSeo={siteSeo} pageSeo={data.notfound.seoMetaTags} />
      <NavSpacer>
        <Container>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Link to="/">Go Home</Link>
        </Container>
        <Connect />
      </NavSpacer>
    </Layout>
  )
}

// export default NoMatch

export const query = graphql`
  query NotFoundQuery {
    notfound: datoCmsAbout {
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
