import React from 'react'
// import Img from 'gatsby-image'
import { Container, TPELogoFooter, LinkExternalBase } from 'components/common'
import { Wrapper, Flex, Links, Serving, Company } from './styles'
// import social from './social.json'

export const Footer = ({ links, serving, copyright }) => (
  <Wrapper>
    <Flex as={Container}>
      <Links>
        {links.map(link => (
          <LinkExternalBase
            key={link.id}
            href={link.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${link.text}`}
          >
            <div>
              <img
                width="36"
                height="36"
                src={link.icon.url}
                alt={link?.icon?.alt || 'Two Perfect Events Contact Icons'}
              />{' '}
              <span>{link.title}</span>
            </div>
            <p>{link.linkText}</p>
          </LinkExternalBase>
        ))}
      </Links>
      <Serving>{serving}</Serving>
      <Company>
        <span>
          {copyright}
          {/* © {new Date().getFullYear()} {copyright} */}
        </span>
        <TPELogoFooter />
      </Company>
    </Flex>
  </Wrapper>
)
