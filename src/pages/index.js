import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Layout, Seo } from 'components/common'
import { Hero, Intro, Skills, Contact, Projects } from 'components/landing'

const Home = ({ data: { home } }) => (
  <Layout>
    <HelmetDatoCms seo={home.seoMetaTags} />
    {/* <Seo /> */}
    <Hero heading={home.heroHeading} subheading={home.heroSubheading} />
    <Intro textNode={home.introTextNode.childMarkdownRemark.html} />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
)

export default Home

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroHeading
      heroSubheading
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
