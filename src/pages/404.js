import React from 'react'
import { SEO } from 'components/common/SEO'
import { Link } from 'gatsby'
import { Layout } from 'components/common'

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go Home</Link>
  </Layout>
)
