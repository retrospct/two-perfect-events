import React from 'react'
import styled from 'styled-components'
import { BgHero } from './BgHero'

export const Hero = () => (
  <HeroContainer>
    <BgHero />
  </HeroContainer>
)

const HeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 1000px;
  margin: 0 auto;
  padding: 30px 40px;
`
