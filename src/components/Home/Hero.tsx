/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
// import React from 'react'
import { BgHero } from './BgHero'

export const Hero = () => {
  return (
    <Box
      // {...props}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        height: '1000px',
        mx: 'auto',
        px: 3,
        py: 4,
      }}
    >
      <BgHero />
    </Box>
  )
}
