import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  /* height: 100%; */
  display: block;
  z-index: 3;
  background: linear-gradient(var(--bg-color), var(--bg-color) 90%, transparent 90%, transparent 100%);
  /* background: linear-gradient(var(--bg-color), transparent); */
  /* background: transparent; */
  /* &:hover {
    background: linear-gradient(var(--bg-color), var(--bg-color) 60%, transparent 60%, transparent 100%);
  } */
  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
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
			z-index: 4;	
	`}
`
