import React from 'react'
import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'
import Thumbnail from 'assets/thumbnail/thumbnail.png'
import {
  url,
  defaultDescription,
  social,
  defaultTitle,
  socialLinks,
  address,
  contact,
  legalName,
  foundingDate,
  logo,
} from 'data/config'

export const Seo = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <meta property="og:url" content={`${url}${location}/?ref=smakosh.com`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={Thumbnail} />
      <meta property="fb:app_id" content={social.facebook} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={socialLinks.twitter} />
      <meta name="twitter:site" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={Thumbnail} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <link rel="publisher" href={socialLinks.google} />
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}

// From TS previous project
// TODO: Delete this at a later commit when no longer needed for active reference
// import React from 'react'
// import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from 'gatsby'

// type MetaItem = {
//   name: string
//   content: string
// }

// type SEOProps = {
//   title?: string
//   description?: string
//   url?: string
//   author?: string
//   keywords?: string[]
//   meta?: MetaItem[]
//   image?: string
// }

// const SEO: React.FC<SEOProps> = (props) => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//           author
//           url
//           keywords
//           image
//         }
//       }
//     }
//   `)

//   const { siteMetadata } = data.site

//   const {
//     title,
//     description,
//     url,
//     author,
//     meta = [],
//     keywords = [],
//     image,
//   } = siteMetadata
//   const siteTitle = props.title || title
//   const siteDescription = props.description || description
//   const siteUrl = props.url || url
//   const siteAuthor = props.author || author
//   const siteImage = props.image || image
//   const siteKeywords = [...keywords, props.keywords].join(',')
//   const metaData = [
//     {
//       name: 'canonical',
//       content: siteUrl,
//     },
//     {
//       name: 'description',
//       content: siteDescription,
//     },
//     {
//       name: 'image',
//       content: siteImage,
//     },
//     {
//       name: 'og:url',
//       content: siteUrl,
//     },
//     {
//       name: 'og:type',
//       content: 'article',
//     },
//     {
//       name: 'og:title',
//       content: siteTitle,
//     },
//     {
//       name: 'og:description',
//       content: siteDescription,
//     },
//     {
//       name: 'og:image',
//       content: siteImage,
//     },
//     {
//       name: 'twitter:card',
//       content: 'summary_large_image',
//     },
//     {
//       name: 'twitter:creator',
//       content: siteAuthor,
//     },
//     {
//       name: 'twitter:title',
//       content: siteTitle,
//     },
//     {
//       name: 'twitter:description',
//       content: siteDescription,
//     },
//     {
//       name: 'twitter:image',
//       content: siteImage,
//     },
//     {
//       name: 'keywords',
//       content: siteKeywords,
//     },
//   ].concat(meta)

//   const linkData = [
//     {
//       rel: 'shortcut icon',
//       href: 'favicon.ico',
//     },
//     {
//       rel: 'apple-touch-icon',
//       href: 'icons/apple-touch-icon.png',
//     },
//   ]
//   return (
//     <Helmet
//       htmlAttributes={{ lang: 'en' }}
//       title={siteTitle}
//       // titleTemplate={`%s | ${siteTitle}`}
//       meta={metaData}
//       link={linkData}
//     />
//   )
// }

// export { SEO }
