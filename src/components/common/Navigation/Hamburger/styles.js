import styled from 'styled-components'

export const Wrapper = styled.div`
  z-index: 11;
  top: 1.6rem;
  right: 1.8rem;
  display: none;
  cursor: pointer;
  transition: left 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  position: absolute;

  @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
    display: block;
    top: 1.4rem;
  }

  ${({ sidebar, theme }) =>
    sidebar &&
    `
			right: 18%;
			top: 1.4rem;
		
			@media (max-width: ${theme.mq.lg}px) {
				right: 33%;
			}
		
			@media (max-width: ${theme.mq.sm}px) {
				right: 64%;
			}
	`}
`

export const Bar = styled.div`
  /* width: 1.6rem;
  height: 0.15rem;
  margin-bottom: 0.3rem; */
  width: 32px;
  height: 3px;
  margin-bottom: 6px;
  /* width: 32px; 32.26px
	height: 3px; 3.11px
	margin-bottom: 6px; 6.24px */
  background-color: var(--text-color);
  transition: transform 500ms cubic-bezier(0.6, 0.05, 0.28, 0.91), opacity 500ms, box-shadow 250ms,
    background-color 500ms;

  @media (max-width: ${({ theme }) => `${theme.mq.sm}px`}) {
    /* width: 1.6rem; */
    width: 32px;
  }

  ${({ top, sidebar }) =>
    top &&
    sidebar &&
    `
		transform: translateY(12px) rotate(-135deg);
	`}

  ${({ mid, sidebar }) =>
    mid &&
    sidebar &&
    `
			transform: scale(0);
	`}

	${({ bottom, sidebar }) =>
    bottom &&
    sidebar &&
    `
			transform: translateY(-6px) rotate(-45deg);
	`}
`
