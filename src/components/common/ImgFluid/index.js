import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components'

export const ImgFluid = styled(GatsbyImage)`
  width: 100%;
  max-height: 800px;
  /* opacity: ${({ theme }) => (theme.currentColor === 'light' ? `1` : `0.87`)}; */
  & > .gatsby-image-wrapper {
    min-height: 420px;
  }
  & > img {
    min-height: 420px;
  }
`
