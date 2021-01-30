import Link from 'gatsby-link'
import styled from 'styled-components'
import footerIllustration from 'assets/illustrations/footer.svg'

export const Wrapper = styled.footer`
  padding: 3rem 0;
  /* padding: 28rem 0 4rem 0; */
  /* background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat; */

  /* @media (max-width: 1960px) {
    padding: 10rem 0 6rem;
  } */
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`

export const Links = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  & a {
    color: var(--accent-color);
    margin: 0.5rem 0.5rem;
    img {
      margin: 0;
    }
    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
  & p {
    color: var(--text-color);
  }
  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Serving = styled.div`
  margin-bottom: 3rem;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Company = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  & svg {
    margin-bottom: 1.5rem;
  }
  @media (max-width: 960px) {
    align-items: center;
    text-align: center;
    order: 2;
    margin-bottom: 3rem;
    & span {
    }
    & svg {
      padding: 0.5rem;
      max-width: 100%;
      margin-bottom: 1rem;
    }
  }
`

export const Fluid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 3rem;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 0 1rem;
  }
`

export const BottomNavigation = styled.div`
  padding: 3rem 0;
  /* padding: 3rem 0 0; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: right;
  grid-gap: 3rem;
  font-size: 1.2rem;
  font-weight: normal;
  & .bottom-nav-first {
    /* padding: 0 2rem; */
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 14px;
    justify-content: space-between;
  }
  & .bottom-nav-second {
    /* padding: 0 2rem; */
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    justify-content: space-between;
    & .bottom-nav-submenu {
      font-size: 0.9rem;
      /* margin-left: 0.5rem; */
      /* margin-bottom: 0; */
    }
  }
  @media (max-width: 960px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    grid-gap: 0.5rem;
    order: 1;
    /* padding-bottom: 2rem; */
  }
`

export const BottomNavLink = styled(Link)`
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
  &.bottom-nav-menu:hover,
  &.bottom-nav-submenu:hover {
    &:after {
      right: 80%;
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
    color: var(--disabled-color);
  }
  &.navlink-disabled:hover {
    cursor: not-allowed;
    color: var(--text-color);
    &:after {
      right: 100%;
    }
  }
  @media (max-width: 960px) {
    &:after {
      right: 50%;
      left: 50%;
      transition: all 0.4s cubic-bezier(0, 0.5, 0, 1);
    }
    &:hover {
      &:after {
        right: 40%;
        left: 40%;
      }
    }
    &.bottom-nav-menu:hover,
    &.bottom-nav-submenu:hover {
      &:after {
        right: 40%;
      }
    }
  }
`
