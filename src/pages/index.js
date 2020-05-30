import React from 'react'
// import { ThemeProvider } from 'styled-components'
import { Layout, Seo } from 'components/common'
// import { SEO } fromcomponents/common/SEO'
// import { theme } from 'components/theme'
import { Intro, Hero, Skills, Contact, Projects } from 'components/landing'

const Home = () => (
  <Layout>
    {/* <ThemeProvider theme={theme}> */}
    <Seo />
    <Intro />
    {/* <Hero /> */}
    <Projects />
    <Skills />
    <Contact />
    {/* </ThemeProvider> */}
  </Layout>
)

export default Home
