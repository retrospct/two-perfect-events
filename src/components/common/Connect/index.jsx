import React from 'react'
import { navigate } from 'gatsby'

import { useTheme } from 'context/themeContext'

import { Icon, IconSquiggly, IconParty, Button, ButtonContrast } from 'components/common'
import { ConnectWrapper, Spotlight, SpotlightBottom } from './styles'

export const Connect = ({ variant = 'accent' }) => {
  const { colors } = useTheme()
  return (
    <ConnectWrapper variant={variant}>
      <hr />
      <Spotlight>
        <Icon color={variant === 'inverse' ? colors.primary : colors.textLight}>
          <IconSquiggly alt="Squiggly arrow pointing towards a Let's Connect button." />
        </Icon>
      </Spotlight>
      {variant === 'inverse' ? (
        <Button onClick={() => navigate('/contact')}>LET'S CONNECT!</Button>
      ) : (
        <ButtonContrast variant={variant} onClick={() => navigate('/contact')}>
          LET'S CONNECT!
        </ButtonContrast>
      )}
      <SpotlightBottom>
        <Icon color={variant === 'inverse' ? colors.primary : colors.textLight}>
          <IconParty alt="Hand drawn line illustration of a party hat." />
        </Icon>
      </SpotlightBottom>
      <hr className="hr-connect-second" />
    </ConnectWrapper>
  )
}

// color={variant === 'accent' ? colors.accent : colors.primary}
// color={variant === 'accent' ? colors.accent : colors.primary}
