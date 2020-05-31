import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Link } from '../Link'

// TODO: Combine this into the Seo component

export const LayoutCms = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? 'is-open' : ''}`}>
          <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} seo={data.datoCmsHome.seoMetaTags} />
          <div className="container__sidebar">
            <div className="sidebar">
              <h6 className="sidebar__title">
                <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
              </h6>
              <div
                className="sidebar__intro"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
                }}
              />
              <ul style={{ display: 'flex', listStyle: 'none' }}>
                <li>
                  <Link to="/" style={{ color: 'MediumOrchid', marginRight: 20 }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" style={{ color: 'MediumOrchid', marginRight: 20 }}>
                    About CMS
                  </Link>
                </li>
                <li>
                  <Link to="/demo" style={{ color: 'MediumOrchid', marginRight: 20 }}>
                    Demo CMS
                  </Link>
                </li>
              </ul>
              <p className="sidebar__social">
                {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                  <a
                    key={profile.profileType}
                    href={profile.url}
                    target="blank"
                    className={`social social--${profile.profileType.toLowerCase()}`}
                  >
                    {' '}
                  </a>
                ))}
              </p>
              <div className="sidebar__copyright">{data.datoCmsHome.copyright}</div>
            </div>
          </div>
          <div className="container__body">
            <div className="container__mobile-header">
              <div className="mobile-header">
                <div className="mobile-header__menu">
                  <button
                    type="button"
                    onClick={e => {
                      e.preventDefault()
                      setShowMenu(!showMenu)
                    }}
                  />
                </div>
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    />
  )
}
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
