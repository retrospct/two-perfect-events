import React from 'react'
import styled from 'styled-components'

import starUrl, { ReactComponent as Star } from 'assets/icons/icon-star.svg'
import { ReactComponent as FiveStars } from 'assets/icons/icon-five-star.svg'

export const Testimonials = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        gridGap: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4rem 0',
        width: 300,
        margin: '0 auto',
      }}
    >
      <img src={starUrl} alt="Something" />
      <Star />
      <FiveStars style={{ color: 'red' }} />
      <StyledFiveStars />
      <StyledStar />
    </div>
  )
}

const StyledFiveStars = styled(FiveStars)`
  /* height: auto; */
  width: 50%;
  color: var(--primary-color);
`
const StyledStar = styled(Star)`
  color: var(--primary-color);
`
