import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  overflow: auto;
  top: 0;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  background-color: var(--bg-color);
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);

  ${({ active, theme }) =>
    active &&
    `
			width: 20%;
			right: 0px;
			opacity: 1;
			@media (max-width: ${theme.mq.lg}px) {
				width: 40%;
      }
			@media (max-width: ${theme.mq.sm}px) {
				width: 75%;
			}
	`}
`
