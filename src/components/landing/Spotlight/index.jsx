import React from 'react'
import styled from 'styled-components'

export const Spotlight = () => (
  <Section>
    <MultiFeatureSpot></MultiFeatureSpot>
  </Section>
)

export const Section = styled.section`
  margin-top: 120px;
  margin-bottom: 120px;
  @media (min-width: 768px) {
    margin-top: 130px;
    margin-bottom: 130px;
  }
`

export const MultiFeatureSpot = styled.div`
  display: block;
  position: relative;
  background-color: unset; /* props.theme.color || 'unset' */
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
  }
`

export const MultiFeatureSpotBackground = styled.div`
  @media (min-width: 768px) {
    grid-column: 1 / span 14;
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    padding: 60px 0;
    margin: 0 auto;
    border-radius: 0;
  }
  @media (min-width: 990px) {
    grid-template-columns: repeat(12, 1fr);
    grid-column: 2 / span 12;
    padding: 60px 0;
    border-radius: 8px;
    box-shadow: 0 0 black;
  }
`

export const MultiFeatureSpotIcon = styled.img`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  @media (min-width: 768px) {
    grid-row: 1;
    grid-column: 2 / 3;
    position: relative;
    top: -100px;
    left: 0;
    transform: none;
  }
`
