import React from 'react'
import { SEO } from 'components/common/SEO'
import { Layout } from 'components/common'
import { Intro, Skills, Contact, Projects } from 'components/landing'

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)
