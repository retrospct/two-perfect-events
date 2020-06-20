import styled from 'styled-components'

export const Wrapper = styled.div`
  ${({ desktop, theme }) =>
    desktop
      ? `
			@media (max-width: ${theme.mq.lg}px) {
				display: none;
			}

			a {
				margin-right: 2rem;

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
  position: relative;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--subheading-color);
  text-transform: initial;
  padding: 0 0 6px;
  border-color: var(--primary-color);
    /* font-size: 1.42857em;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #595959; */
  :after {
    border-top: 1px solid;
    content: "";
    position: absolute;
    right: 100%;
    bottom: -1px;
    left: 0;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
  }
  :hover {
    background: transparent;
    color: var(--primary-color);
    transform: translate(0,0);
    /* border-color: #e6e6e6; */
    :after {
      right: 0;
    }
  }
  &.selected {
    color: var(--primary-color);
    /* font-weight: 700; */
    :after {
      right: 0;
    }
  }
`

export const CTANavLink = styled(NavLink)`
  color: var(--primary-color);
  font-weight: 400;
`

// export const CTANavButton = styled.button`
//   font-weight: 300;
//   text-align: center;
//   cursor: pointer;
//   border-radius: 30px;
//   padding: 0.7rem 1.5rem;
//   border: none;
//   user-select: none;
//   color: #fff;
//   background: var(--primary-color);
//   /* background: ${({ theme }) => theme.colors.primary}; */
//   &:focus {
//     outline: none;
//   }
//   &:disabled {
//     background: gray;
//   }
//   /* &.selected {
//     display: none;
//   } */
//   /* ${({ secondary, theme }) => secondary && `background: ${theme.colors.secondary};`} */
//   ${({ secondary }) => secondary && `background: var(--secondary-color);`}
// `
