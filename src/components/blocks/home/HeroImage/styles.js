import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 420px;
  &:before {
    content: '';
    background: rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  & .gatsby-image-wrapper {
    min-height: 420px;
  }
  & img {
    min-height: 420px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 1rem;
    word-wrap: break-word;
    h3 {
      font-size: 3rem;
      color: var(--accentLight-color);
      text-align: center;
    }
    p {
      font-size: 1.45rem;
      color: var(--text-inverse-color);
      text-align: center;
    }
  }
`
