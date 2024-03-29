import styled from 'styled-components'

export const Wrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  /* height: 120px; */
  /* display: block; */
  z-index: 10;
  /* background: linear-gradient(var(--bg-color), var(--bg-color) 90%, transparent 90%, transparent 100%); */
  background: var(--bg-color);
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    /* height: 79px; */
    background: var(--bg-color);
  }
`

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;
  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
			z-index: 10;	
	`}
`
