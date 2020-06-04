import styled from 'styled-components'
// import overlayIllustration from '../../../assets/illustrations/overlay.svg'
import hero from 'assets/illustrations/hero.svg'
import heroLight from 'assets/illustrations/heroLight.svg'
// import heroAlt from 'assets/illustrations/heroAlt.svg'
import partyItems from 'assets/illustrations/partyItems.svg'

export const Wrapper = styled.div`
  /* padding-top: 4rem; */
  padding-bottom: 4rem;
  position: relative;
  /* background: url(${hero});
  background-size: inherit;
  background-position: 75% bottom;
  background-repeat: no-repeat; */
  height: calc(90vh - 90px);
  min-height: 700px;
  /* max-width: 1280px;
  margin: 0 auto; */
  /* margin-left: -3vw;
  margin-right: -3vw; */
  /* background-position: right top; */
 
  &:after {
      content: '';
      position: absolute;
      background: url("${({ theme }) => (theme.themeString === 'light' ? hero : heroLight)}");
      background-position: center top;
      background-size: contain;
      background-repeat: no-repeat;
      height: calc(100% - 90px);
      top: 90px;
      left: 0;
      right: 0;
      width: 100vw;
      max-width: 100%;
      z-index: -2;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
      min-height: 600px;
      max-height: 100%;
    &:after {
      /* content: '';
      position: absolute; */
      background: url("${partyItems}");
      background-position: left top;
      background-size: cover;
      /* width: 100%; */
      /* max-width: 100%; */
      /* background-repeat: no-repeat; */
      /* height: calc(100% - 90px); */
      /* z-index: -1;
      margin: 0 auto; */
    }
  }
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  min-height: 600px;

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    min-height: 500px;
    max-height: 100%;
    padding: 3rem 0;
  }
`

export const Details = styled.div`
  /* flex: 1; */
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 36pt;
    color: var(--heading-color);

    @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
      margin-bottom: 0.5rem;
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: var(--subheading-color);

    @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
      font-size: 20pt;
    }
  }
`

export const ArrowNext = styled.div`
  /* flex: 1; */
  /* align-self: flex-end; */
  /* padding-top: 4rem; */
  /* margin-top: -6rem; */
  display: none;
  position: absolute;
  left: calc(50vw - 56px);
  bottom: 0;
  z-index: -1;

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    display: inherit;
    /* width: 100%; */
  }

  img {
    /* width: 100%; */
  }
`
