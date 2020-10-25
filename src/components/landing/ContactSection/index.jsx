import React from 'react'

import { Container, ContactForm, Icon, IconSquiggly } from 'components/common'
import { Fluid, Wrapper, ContactBlock, Spotlight, Header } from './styles'

export const ContactSection = ({ heading, config, contrast }) => {
  return (
    <Fluid id="contact">
      <Wrapper as={Container}>
        <ContactBlock>
          {config.squigglyIcon && (
            <Spotlight>
              <Icon>
                <IconSquiggly alt="Arrow pointing towards let's get this party started" />
              </Icon>
            </Spotlight>
          )}
          {heading ? (
            <Header>
              <h3>{heading.toUpperCase()}</h3>
            </Header>
          ) : (
            <Header>
              <h3>{config?.heading?.toUpperCase()}</h3>
            </Header>
          )}
          <ContactForm config={config} contrast={contrast} />
        </ContactBlock>
      </Wrapper>
    </Fluid>
  )
}
