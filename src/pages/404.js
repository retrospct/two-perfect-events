import React from 'react'
import { Link } from 'gatsby'
import { Layout, Seo } from 'components/common'
// import { SEO } from '../components/common/SEO'

export default () => (
  <Layout>
    <Seo title="404: Not found" location="/404" description="Page Not Found" />
    {/* <SEO /> */}
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go Home</Link>
  </Layout>
)

// export default NoMatch
