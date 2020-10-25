import styled from 'styled-components'
import { LinkExternal } from 'components/common'

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  text-align: center;
  h3 {
    margin-bottom: 1rem;
  }
`

export const Username = styled.h4`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
`

export const UsernameLink = styled(LinkExternal)`
  color: var(--primary-color);
  &:hover {
    color: var(--primaryLighter-color);
  }
`

export const InstaLink = styled.a`
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`

export const InstaGallery = styled.div`
  width: 100%;
  max-width: calc(320px * 3 + 40px);
  margin: 1rem 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  justify-content: space-around;
  & .gatsby-image-wrapper {
    /* width: 100%;
    height: 100%;
    max-width: 320px;
    max-height: 320px; */
  }
  @media (max-width: ${({ theme }) => `${theme.mq.xl}px`}) {
    max-width: calc(320px * 2 + 20px);
  }
  @media (max-width: ${({ theme }) => `${theme.mq.md}px`}) {
    max-width: 96%;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`
