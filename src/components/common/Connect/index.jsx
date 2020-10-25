import React from 'react'
import { navigate } from 'gatsby'

import { useTheme } from 'context/themeContext'

import { Icon, IconSquiggly, IconParty, ButtonContrast } from 'components/common'
import { ConnectWrapper, Spotlight, SpotlightBottom } from './styles'

export const Connect = () => {
  const { colors } = useTheme()
  return (
    <ConnectWrapper>
      <hr />
      <Spotlight>
        <Icon>
          <IconSquiggly color={colors.accent} alt="Squiggly arrow pointing towards a Let's Connect button." />
        </Icon>
      </Spotlight>
      <ButtonContrast onClick={() => navigate('/contact')}>LET'S CONNECT!</ButtonContrast>
      <SpotlightBottom>
        <Icon>
          <IconParty color={colors.accent} alt="Hand drawn line illustration of a party hat." />
        </Icon>
      </SpotlightBottom>
      <hr className="hr-connect-second" />
    </ConnectWrapper>
  )
}
