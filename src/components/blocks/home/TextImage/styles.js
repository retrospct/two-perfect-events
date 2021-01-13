import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    flex-direction: column;
  }
`

export const TextBlock = styled.div`
  background: var(--bg-color);
  flex: 1;
  /* padding-right: 2rem; */
  /* border-radius: 3px; */
  width: 100%;
  height: 100%;
  padding: 3rem 4rem;
  margin: 1.5rem -5rem 1.5rem 0;
  z-index: 5;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    padding: 1rem;
    margin-right: 0;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.6rem;
    color: var(--text-color);
  }
`

export const ImgBlock = styled.div`
  flex: 1;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    width: 100%;
    margin-bottom: 1rem;
  }
  img {
    /* border-radius: 3px; */
    width: 100%;
  }
`

export const MoreLinks = styled.ul`
  margin-top: 1.5rem;
  li a {
    text-transform: uppercase;
  }
`
