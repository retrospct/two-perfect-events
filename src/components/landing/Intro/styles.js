import styled from 'styled-components'
// import overlayIllustration from '../../../assets/illustrations/overlay.svg'
import heroMain from 'assets/illustrations/heroMain.svg'
import partyItems from 'assets/illustrations/partyItems.svg'

export const Wrapper = styled.div`
  /* padding-top: 4rem; */
  padding-bottom: 4rem;
  position: relative;
  background: url(${heroMain});
  /* background-size: initial; */
  background-size: inherit;
  background-position: 75% bottom;
  background-repeat: no-repeat;
  height: 1000px;
  /* max-width: 1280px;
  margin: 0 auto; */
  /* margin-left: -3vw;
  margin-right: -3vw; */
  /* background-position: right top; */
  &:after {
      content: '';
      position: absolute;
      background: url("${partyItems}");
      background-position: center top;
      background-size: contain;
      background-repeat: no-repeat;
      height: 100%;
      top: 90px;
      left: 0;
      right: 0;
      width: 100vw;
      z-index: -1;
      margin: 0 auto;
    }
`

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: 1000px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  /* flex: 1; */
  /* padding: 4rem 0; */

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`

export const Thumbnail = styled.div`
  flex: 1;
  align-self: flex-end;
  /* padding-top: 4rem; */
  /* margin-top: -6rem; */

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`
