import styled from 'styled-components'
// import arrowSquiggly from 'assets/illustrations/arrowSquiggly.svg'

export const Fluid = styled.div`
  width: 100%;
  background: var(--accent-color);
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    grid-template-columns: 1fr;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  /* justify-content: center; */
  align-items: center;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    grid-template-columns: 1fr;
  }
`

export const ContactBlock = styled.div`
  position: relative;
  padding: 6rem 0 2rem 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--textLight-color);
  width: 100%;
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    padding-right: unset;
    width: 100%;
    padding: 6rem 1.5rem 4rem;
  }
  /* p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
  } */
`
// /* content: ' '; */
// /* background: url(${arrowSquiggly}); */
// /* background-repeat: no-repeat; */
// /* z-index: 1; */
export const Spotlight = styled.div`
  height: 222px;
  width: 111px;
  position: absolute;
  top: 0;
  right: 1.5rem;
  margin-top: -4rem;
  color: var(--textLight-color);
  & img {
    height: 80%;
    width: 111px;
    transform: scale(-1, 1) rotate(-25deg);
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    margin-top: -2rem;
  }
`

export const Header = styled.div`
  text-align: left;
  /* overflow: auto; */
  h3 {
    color: var(--textLight-color);
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
  }

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    h3 {
      font-size: 2rem;
    }
  }
`

export const ImgBlock = styled.div`
  display: none;
  height: 100%;
  min-height: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    display: block;
  }
  & .gatsby-image-wrapper {
    min-height: 100%;
    max-width: 100%;
  }
`
