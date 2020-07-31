import styled from 'styled-components'
import footerIllustration from 'assets/illustrations/footer.svg'

export const Wrapper = styled.footer`
  padding: 3rem 0 6rem;
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
    /* align-items: center; */
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    & span {
      order: 2;
    }
    & svg {
      order: 1;
      padding: 0.5rem;
      max-width: 100%;
      margin-bottom: 1rem;
    }
  }
`
