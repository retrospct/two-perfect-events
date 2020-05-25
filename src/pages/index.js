import React from 'react'
// import { ThemeProvider } from 'styled-components'
import { Layout, Seo } from 'components/common'
// import { SEO } fromcomponents/common/SEO'
// import { theme } from '../components/theme'
import { Intro, Skills, Contact, Projects } from 'components/landing'

// <ThemeProvider theme={theme}>
const Home = () => (
  <Layout>
    <Seo />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default Home
