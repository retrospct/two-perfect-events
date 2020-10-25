import styled from 'styled-components'

export const ConnectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  color: var(--textLight-color);
  overflow: hidden;
  & hr,
  & .hr-connect-second {
    position: absolute;
    top: 16px;
    left: 0;
    right: 0;
    background: white;
    height: 2px;
    width: 100%;
    margin: 0;
  }
  & .hr-connect-second {
    top: unset;
    bottom: 16px;
  }
`
export const Spotlight = styled.div`
  height: 222px;
  width: 111px;
  position: absolute;
  top: 0;
  right: 20%;
  color: var(--textLight-color);
  & svg {
    height: 80%;
    width: 111px;
    transform: scale(-1, 1) rotate(-25deg) translateY(-2rem);
  }
`

export const SpotlightBottom = styled(Spotlight)`
  top: unset;
  left: 25%;
  bottom: 0;
  & svg {
    transform: translateX(-1.87rem);
  }
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    & svg {
      transform: translateX(-1.87rem);
    }
  }
`
