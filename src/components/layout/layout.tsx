import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { theme, GlobalStyles } from '../../styles'
// Components
import { CSSDebugger } from '../css-debugger'
import { Link } from '../Link'
import { Footer } from '../Footer'

// .intro__image {
//   position: absolute;
//   left: 50%;
//   bottom: 105px;
//   z-index: 1;
//   -webkit-transform: translateX(-50%);
//   -ms-transform: translateX(-50%);
//   transform: translateX(-50%);
// }
// .about {
//   padding-top: 450px;
//   padding-bottom: 360px;
//   margin-top: -410px;
// }
// .section {
//   position: relative;
//   overflow: hidden;
// }
// article, aside, footer, header, nav, section {
//   display: block;
// }
// .about:before {
//   content: "";
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 1500px;
//   background-color: #f5f7fa;
// }
// .about__inner {
//   position: relative;
//   z-index: 1;
//   padding-top: 100px;
// }
// .container {
//   max-width: 1140px;
//   margin-right: auto;
//   margin-left: auto;
// }
// .section .background {
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 1920px;
//   -webkit-transform: translateX(-50%);
//   -ms-transform: translateX(-50%);
//   transform: translateX(-50%);
// }
// .section .background img {
//   max-width: 100%;
// }

// <section className="about section">
//   ::before
//   <div className="about__inner container"></div>
//   <div className="intro__image"><img no styles /></div>
//   <div className="background"><img className=</div>
// </section>

const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: ${(props) => (props.theme.screens.sm ? '1.8rem' : '2.2rem')};
  margin: 20px 0px;
  color: white;
`

const Tagline = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.blue};
`

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme()}>
      <Container>
        <GlobalStyles />
        <CSSDebugger />
        <Link to="/">
          <Title>{title.toUpperCase()}</Title>
        </Link>
        <Tagline>{description}</Tagline>
        <br />
        <main>{children}</main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export { Layout }
