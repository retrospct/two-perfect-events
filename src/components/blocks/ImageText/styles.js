import styled from 'styled-components'
import detailsIllustration from 'assets/illustrations/details.svg'

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  background: var(--bg-color);
  flex: 1;
  /* padding-left: 2rem; */
  border-radius: 3px;
  width: 100%;
  height: 100%;
  padding: 3rem 4rem;
  margin: 1.5rem 0 1.5rem -5rem;
  z-index: 10;
  @media (max-width: 960px) {
    padding: 1rem;
    margin-left: 0;
  }

  /* h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: #212121;
  } */

  p {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
`

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 3px;
    width: 100%;
  }
`

export const MoreLinks = styled.ul`
  margin-top: 1.5rem;
  li a {
    text-transform: uppercase;
  }
`
