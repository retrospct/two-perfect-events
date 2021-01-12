import styled from 'styled-components'

export const Wrapper = styled.div`
  & .nav {
    /* list-style: none; */
    display: flex;
    align-items: flex-start;
    padding-top: 0.75rem;
    @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
      flex-direction: column;
    }
  }

  & li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transition-duration: 0.5s;
  }
  & li:hover {
    cursor: pointer;
  }

  & ul li ul {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    margin-top: 0.75rem;
    left: 0;
    display: none;
  }

  /* IE 11 Compatible */
  & ul li:hover > ul,
  & ul li ul:hover,
  & ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
    /* display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start; */
  }

  /* IE 11 won't get this, but at least the top-level menus will work */
  & ul li:focus-within > ul {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  & ul li ul li {
    clear: both;
    width: 100%;
  }

  & .dropdown-container {
    width: 190px;
    & a {
      margin-bottom: 0;
    }
    /* & .dropdown {
      list-style: inside;
      list-style-type: '-';
    } */
  }

  & .dropdown {
    position: relative;
    margin-left: 0;
  }

  ${({ desktop, theme }) =>
    desktop
      ? `
			@media (max-width: ${theme.mq.lg}px) {
				display: none;
			}

			a {
				margin-right: 1.25rem;

				/* &:nth-last-child(1) {
					margin-right: unset;
				} */
			}

      @media (max-width: ${theme.mq.xxl}px) {
				a {
          margin-right: 0.75rem;

          /* &:nth-last-child(2) {
					  margin-right: unset;
				  } */
        }
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
				margin-bottom: 1rem;
				/* &:nth-last-child(2) {
					margin-bottom: unset;
				} */
				:hover:after {
          right: 80%;
        }
        &.selected:after {
          right: 80%;
        }
			}
	`}
`

export const NavLink = styled.a`
  /* color: ${({ theme }) => theme.colors.subheading}; */
  position: relative;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--subheading-color);
  text-transform: initial;
  padding: 6px 0 6px;
  border-color: var(--primaryInverse-color);
  background: transparent;
  /* font-size: 1.42857em;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #595959; */
  :after {
    border-top: 1px solid;
    content: '';
    position: absolute;
    right: 100%;
    bottom: -1px;
    left: 0;
    margin-left: 1px;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
  }
  :hover {
    /* background: transparent; */
    color: var(--primaryInverse-color);
    /* transform: translate(0,0); */
    /* border-color: #e6e6e6; */
    :after {
      right: 40%;
    }
  }
  &.selected {
    color: var(--primaryInverse-color);
    font-weight: 400;
    :after {
      right: 40%;
    }
  }
`

export const NavLinkFirst = styled(NavLink)`
  margin-top: 1.5rem;
`

export const CTANavLink = styled(NavLink)`
  color: var(--primaryInverse-color);
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
