import React from 'react'
import { Layout } from 'components/common'
import SEO from 'components/common/SEO'
import { Intro, Skills, Contact, Projects } from 'components/landing'

const Home = () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default Home
