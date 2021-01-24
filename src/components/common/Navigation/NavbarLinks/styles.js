import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 0.25rem;
  & .nav {
    /* list-style: none; */
    /* position: relative; */
    display: flex;
    margin: 0;
    /* align-items: center; */
    justify-content: flex-end;
    align-items: flex-start;
    /* padding-top: 0.75rem; */
    @media (max-width: ${({ theme }) => `${theme.mq.lg}px`}) {
      flex-direction: column;
      /* justify-content: flex-start; */
    }
  }
  & li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
  }
  & li:hover {
    cursor: pointer;
  }

  & ul li ul {
    visibility: hidden;
    opacity: 0;
    display: none;
    /* visibility: visible; */
    /* opacity: 1; */
    /* display: block; */
    /* position: absolute; */
    /* margin-top: 0.75rem; */
    /* left: 0; */
    /* z-index: 10; */

    /* transition: all 1s ease-in-out; */
  }

  /* IE 11 Compatible */
  & ul li:hover > ul,
  & ul li ul:hover,
  & ul li ul:focus {
    visibility: visible;
    opacity: 1;
    display: block;
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
    /* width: 190px; */
    position: relative;
    & a {
      margin-bottom: 0;
    }
    & ul li a {
      margin-bottom: 0;
      font-size: 0.9rem;
    }
  }

  & .dropdown {
    position: absolute;
    top: 39px;
    left: -10px;
    z-index: 10;
    /* left: calc(100% - (190px + 110px)); */
    margin-left: 0;
    /* width: 190px; */
    background: var(--bg-color);
    padding: 0.5rem 1rem 0.5rem 0.75rem;
    margin-top: 0;
    & li {
      margin-bottom: 0.25rem;
    }
    & li a {
      margin-right: 0;
    }
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
          font-size: 0.95rem;
          margin-right: 0.75rem;
        }
			}
		`
      : `
			padding: 3rem;
			flex-direction: column;

      & li {
        margin-bottom: calc(1.45rem / 2);
      }

      & ul li ul {
        visibility: visible;
        opacity: 1;
        display: block;
      }

      & .dropdown {
        position: relative;
        top: 0;
        background: transparent;
      }

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
  position: relative;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--text-color);
  text-transform: initial;
  padding: 6px 0 6px;
  border-color: var(--primaryInverse-color);
  background: transparent;
  &:after {
    border-top: 1px solid;
    content: '';
    position: absolute;
    right: 100%;
    bottom: -1px;
    left: 0;
    margin-left: 1px;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
  }
  &:hover {
    cursor: pointer;
    color: var(--primaryInverse-color);
    &:after {
      right: 40%;
    }
  }
  &.selected {
    color: var(--primaryInverse-color);
    font-weight: 400;
    &:after {
      right: 40%;
    }
  }
  &.navlink-disabled {
    color: var(--subheading-color);
  }
  &.navlink-disabled:hover {
    cursor: not-allowed;
    color: var(--text-color);
    &:after {
      right: 100%;
    }
  }
`

export const NavLinkButton = styled.button`
  border: none;
  position: relative;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--text-color);
  text-transform: initial;
  padding: 6px 0 6px;
  border-color: var(--primaryInverse-color);
  background: transparent;
  &:after {
    border-top: 1px solid;
    content: '';
    position: absolute;
    right: 100%;
    bottom: -1px;
    left: 0;
    margin-left: 1px;
    transition: right 0.4s cubic-bezier(0, 0.5, 0, 1);
  }
  &:hover {
    cursor: pointer;
    color: var(--primaryInverse-color);
    &:after {
      right: 40%;
    }
  }
  &.selected {
    color: var(--primaryInverse-color);
    font-weight: 400;
    &:after {
      right: 40%;
    }
  }
  &.navlink-disabled {
    color: var(--subheading-color);
  }
  &.navlink-disabled:hover {
    cursor: not-allowed;
    color: var(--text-color);
    &:after {
      right: 100%;
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
