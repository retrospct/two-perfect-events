import React from 'react'
import { Helmet } from 'react-helmet'
import { Layout, Header } from 'components/common'

import partyItems from 'assets/illustrations/partyItems.svg'

const Success = () => (
  <Layout>
    <Header />
    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>

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

export default Success
