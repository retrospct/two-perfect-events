import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ desktop, theme }) =>
    desktop
      ? `
			@media (max-width: ${theme.mq.lg}px) {
				display: none;
			}

			a {
				margin-right: 1rem;

				&:nth-last-child(2) {
					margin-right: unset;
				}
				/* &:last-child {
					margin-right: unset;
				} */
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
				margin-bottom: 1rem;
				&:nth-last-child(2) {
					margin-bottom: unset;
				}
				/* &:last-child {
					margin-bottom: unset;
				} */
			}
	`}
`

export const NavLink = styled.a`
  /* color: ${({ theme }) => theme.colors.subheading}; */
  color: var(--subheading-color);
  font-weight: 300;
  &.selected {
    font-weight: 400;
  }
`

export const CTANavButton = styled.button`
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  border-radius: 30px;
  padding: 0.7rem 1.5rem;
  border: none;
  user-select: none;
  color: #fff;
  background: var(--primary-color);
  /* background: ${({ theme }) => theme.colors.primary}; */
  &:focus {
    outline: none;
  }
  &:disabled {
    background: gray;
  }
  /* &.selected {
    display: none;
  } */
  /* ${({ secondary, theme }) => secondary && `background: ${theme.colors.secondary};`} */
  ${({ secondary }) => secondary && `background: var(--secondary-color);`}
`
