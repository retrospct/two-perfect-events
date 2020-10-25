import styled from 'styled-components'

export const ImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  /* top: 0; */
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.5);
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding: 1rem;
    word-wrap: break-word;
    color: var(--textLight-color);
    text-align: right;
    font-weight: normal;
    /* & .portfolio-venue {
      font-weight: normal;
      padding: 0;
      font-size: 0.85rem;
    } */
    h4 {
      /* font-size: 3rem; */
      color: var(--textLight-color);
      text-align: right;
      margin-bottom: 0.5rem;
      font-weight: normal;
    }
    h5 {
      /* font-size: 1.45rem; */
      color: var(--textLight-color);
      text-align: right;
      margin-bottom: 0.5rem;
      font-weight: normal;
    }
  }
`
