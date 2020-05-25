import React from 'react'
// import { ThemeProvider } from 'styled-components'
import { Layout } from '../components/common'
// import { SEO } from '../components/common/SEO'
// import { theme } from '../components/theme'
import { Intro, Skills, Contact, Projects } from '../components/landing'

// <ThemeProvider theme={theme}>
const Home = () => (
  <Layout>
    {/* <SEO /> */}
    <Intro />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default Home
