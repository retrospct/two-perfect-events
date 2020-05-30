import React from 'react'
import styled from 'styled-components'
import heroMain from 'assets/illustrations/heroMain.svg'
import partyItems from 'assets/illustrations/partyItems.svg'
// import { useTheme } from 'components/theme/Core'

export const Hero = () => {
  // const theme = useTheme()
  return (
    <HeroContainer>
      {/* <BgHero /> */}
      <Illustration
        src={heroMain}
        alt="Line illustration of a beautifully set rectangular table with floral arrangments, crystal, fine china, and a linen runner."
      />
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 1000px;
  margin: 0 auto;
  padding: 30px 40px;
  &:after {
      content: '';
      position: absolute;
      background: url("${partyItems}");
      background-repeat: repeat no-repeat;
      /* background-color: inherit; */
      height: 720px;
      top: 80px;
      left: -3vw;
      /* mask-image: url("${partyItems}"); */
      width: 106vw;
      z-index: 1;
      /* bottom: -800px; */
    }
`
const Illustration = styled.img`
  /* color: ${props => props.theme.colors.primary}; */
`
// const PartyItem
// import { LightThemeColor } from '../../utils'
// export { Hero } from './component'

// // This set of props is used across all Hero-type components.
// export interface IExtensibleProps {
//   eyebrow?: string
//   headline: string
//   headline2?: string
//   subheading?: string
// }

// // The next few definitions describe ONLY props consumed
// // by this specific Hero.
// export interface ILayout {
//   leftAlign: boolean
//   compact: boolean
// }

// export type IHeroContentAlignment = 'Left' | 'Center'
// export type IHeroVerticalLayout = 'Default' | 'Compact'

// export interface IAuxContentLayout {
//   renderAuxContent: () => React.ReactNode
//   isBackground?: boolean
// }

// // This interface describes *all* the props used by this Hero component.
// export interface IProps extends IExtensibleProps {
//   renderMainContent?: () => React.ReactNode
//   layout: ILayout
//   compact?: boolean
//   media?: IAuxContentLayout
//   bgColor?: LightThemeColor
//   bottomTexture?: boolean
// }
