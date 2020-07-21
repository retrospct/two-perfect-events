import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Header = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`

export const Content = styled.div`
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Badges = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  justify-content: center;
  justify-items: center;
  margin: 1rem 0;
`

export const MoreLink = styled.div`
  margin-top: 2rem;
`
