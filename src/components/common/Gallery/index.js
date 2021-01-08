import React from 'react'
import styled from 'styled-components'

export const Gallery = ({ size, columns, gap, children }) => (
  <>
    {!size && <BaseGallery>{children}</BaseGallery>}
    {size && (
      <DynamicGallery size={size} columns={columns} gap={gap}>
        {children}
      </DynamicGallery>
    )}
  </>
)

export const BaseGallery = styled.div`
  width: 100%;
  max-width: calc(420px * 3 + 40px);
  margin: 1rem 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  justify-items: center;
  justify-content: space-around;
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    max-width: calc(420px * 2 + 20px);
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 100%;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`

export const DynamicGallery = styled(BaseGallery)`
  max-width: ${({ size, columns, gap }) => `calc(${size} * ${columns || 3} + ${gap ? `${gap * columns}px` : '40px'})`};
  grid-template-columns: ${({ size }) => `repeat(auto-fit, minmax(${size}, 1fr))`};
  grid-gap: ${({ gap }) => `${gap}px` || '10px'};
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    max-width: ${({ size, columns, gap }) =>
      `calc(${size} * ${columns ? columns - 1 : 2} + ${gap ? `${gap * (columns - 1)}px` : '20px'})`};
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    grid-template-columns: ${({ size }) => `repeat(auto-fit, minmax(${size}, 1fr))`};
  }
`

// export const Gallery = styled.div`
//   width: 100%;
//   max-width: calc(420px * 3 + 40px);
//   margin: 1rem 0;
//   display: grid;
//   grid-gap: 20px;
//   grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
//   justify-items: center;
//   justify-content: space-around;
//   /* & .gatsby-image-wrapper {
//     width: 100%;
//     height: 100%;
//     max-width: 420px;
//     max-height: 420px;
//   } */
//   @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
//     max-width: calc(420px * 2 + 20px);
//   }
//   @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
//     max-width: 96%;
//     grid-gap: 10px;
//     grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
//   }
// `
