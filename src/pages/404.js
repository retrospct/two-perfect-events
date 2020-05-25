import React from 'react'
import { Link } from 'gatsby'
import { Layout, SEO } from 'components/common'

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" description="Page Not Found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go Home</Link>
  </Layout>
)
