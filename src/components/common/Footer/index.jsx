import React from 'react'
import { Container, TPELogomark, TPELogoFooter, LinkExternalBase } from 'components/common'
import { Wrapper, Flex, Links, Serving, Company } from './styles'
import { useTheme } from 'context/themeContext'

export const Footer = ({ links, serving, copyright }) => {
  const { currentTheme, screens } = useTheme()
  return (
    <Wrapper>
      <Flex as={Container}>
        <Links>
          {links.map((link) => (
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
                  alt={link?.icon?.alt || 'Two Perfect Events social media platform logos'}
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
          {screens.md && (
            <TPELogomark color={currentTheme === 'dark' || currentTheme === 'superDark' ? '#fff' : null} />
          )}
          {!screens.md && (
            <TPELogoFooter color={currentTheme === 'dark' || currentTheme === 'superDark' ? '#fff' : null} />
          )}
        </Company>
      </Flex>
    </Wrapper>
  )
}
