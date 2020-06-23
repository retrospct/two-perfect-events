import styled from 'styled-components'

export const Fluid = styled.div`
  width: 100%;
  background: var(--accent-color);
  /* position: relative; */
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  /* align-items: flex-start; */
  grid-gap: 30px;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  /* width: calc(100% - 400px); */
  /* max-height: 1400px; */
  width: 100%;
  /* display: grid;
  grid-template-columns: 2fr 1fr; */
  /* align-items: flex-start; */
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    flex-direction: column;
  }
`

export const ContactBlock = styled.div`
  padding: 4rem 3rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--textLight-color);
  width: 100%;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    padding-right: unset;
    width: 100%;
    /* order: 1; */
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    /* color: var(--textLight-color); */
  }
`

export const Header = styled.div`
  text-align: left;
  h3 {
    color: var(--textLight-color);
    margin-bottom: 1rem;
  }
`

export const ImgBlock = styled.div`
  /* flex: 1; */
  /* width: 400px; */
  display: none;
  max-height: 1400px;
  /* overflow: hidden;
  position: absolute; */
  /* min-height: 100%;
  min-width: 100%; */
  overflow: hidden;
  /* right: 0;
  top: 0;
  bottom: 0; */
  @media (min-width: ${({ theme }) => `${theme.mq.sm}px`}) {
    /* width: 100%; */
    /* margin-bottom: 2rem; */
    display: block;
  }
  &.gatsby-image-wrapper {
    min-height: 100%;
    min-width: 100%;
  }

  /* img {
    max-width: 100%;
    max-height: 100%;
  } */
`
