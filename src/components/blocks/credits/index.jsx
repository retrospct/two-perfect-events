import React, { useState } from 'react'
import { CreditItem } from './CreditItem'
import { CreditSection } from './CreditSection'
import { Container, Icon, IconArrow } from 'components/common'
import { Wrapper, Content, Header } from './styles'
// import iconArrow from 'assets/icon-arrow.svg'

export const CreditsBlock = ({ heading, creditsBlock }) => {
  const [isShowing, setIsShowing] = useState(false)
  return (
    <Wrapper as={Container}>
      <Content>
        <Header>
          {heading && (
            <p onClick={() => setIsShowing(!isShowing)}>
              {/* {heading} <IconImg src={iconArrow} alt="Arrow pointing to the right" /> */}
              {heading}{' '}
              <Icon size="18px">
                <IconArrow />
              </Icon>
            </p>
          )}
        </Header>
        {isShowing && (
          <div>
            {creditsBlock.map((block) => (
              <div key={block.id}>
                {block.model.apiKey === 'credit_section' && <CreditSection block={block} />}
                {block.model.apiKey === 'credit_item' && <CreditItem block={block} />}
              </div>
            ))}
          </div>
        )}
      </Content>
    </Wrapper>
  )
}
