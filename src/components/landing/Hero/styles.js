import styled from 'styled-components'
import hero from 'assets/illustrations/heroClean.svg'
import heroLight from 'assets/illustrations/heroCleanLight.svg'
import partyItems from 'assets/illustrations/partyItems.svg'

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  position: relative;
  height: calc(90vh - 90px);
  min-height: 700px;

  &:after {
    content: '';
    position: absolute;
    background: url('${({ theme }) => (theme.themeString === 'light' ? hero : heroLight)}');
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
      background: url('${partyItems}');
      background-position: left top;
      background-size: cover;
    }
  }
`

export const IntroWrapper = styled.div`
  padding: 7rem 0 4rem;
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
  max-width: 66%;
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    font-family: var(--serif-font);
    margin-bottom: 1rem;
    font-size: 2.9rem;
    color: var(--heading-color);

    @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
      margin-bottom: 1rem;
      font-size: 2.5rem;
      line-height: 1.1;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    line-height: 1.25;
    font-weight: normal;
    color: var(--subheading-color);

    @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
      font-size: 1.2rem;
    }
  }
`

export const ArrowNext = styled.div`
  display: none;
  position: absolute;
  left: calc(50vw - 56px);
  bottom: 0;
  z-index: -1;

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    display: inherit;
  }
`
