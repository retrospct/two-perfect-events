import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Code } from '../components/code'
import { Link } from '../components/link'
// import { linkResolver } from '../utils/linkResolver'

const command = 'git clone git@github.com:retrospct/two-perfect-events.git'

const App = () => (
  <Layout>
    <SEO />
    <Code>{command}</Code>
    <ul style={{ paddingLeft: 0, display: 'flex', listStyle: 'none' }}>
      <li>
        <Link to="/" style={{ color: 'MediumOrchid', marginRight: 20 }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" style={{ color: 'MediumOrchid', marginRight: 20 }}>
          About
        </Link>
      </li>
      <li>
        <Link
          to="/about-cms"
          style={{ color: 'MediumOrchid', marginRight: 20 }}
        >
          About CMS
        </Link>
      </li>
      <li>
        <Link to="/demo-cms" style={{ color: 'MediumOrchid', marginRight: 20 }}>
          Demo CMS
        </Link>
      </li>
      <li>
        <Link to="/home" style={{ color: 'MediumOrchid', marginRight: 20 }}>
          Home
        </Link>
      </li>
    </ul>
  </Layout>
)

export default App
