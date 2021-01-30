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
  width: 100%;
  height: 100%;
  padding: 3rem 4rem;
  margin: 1.5rem 0 1.5rem -5rem;
  z-index: 5;
  @media (max-width: ${({ theme }) => theme.mq.lg}px) {
    padding: 1rem;
    margin-left: 0;
  }

  & h4 {
    font-size: 1.3rem;
    line-height: 1.2;
    color: var(--subheading-color);
  }

  & p {
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
    width: 100%;
  }
`

export const MoreLinks = styled.ul`
  margin-top: 1.5rem;
  li a {
    text-transform: uppercase;
  }
`

// .card { // CARD BASE
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   min-width: 0;
//   word-wrap: break-word;
//   background-color: #fff;
//   background-clip: border-box;
//   border: 1px solid rgba(0, 0, 0, 0.125);
//   border-radius: 0.25rem;
// }
// & .card {
//   margin: 0px auto;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   transition: transform 0.2s ease 0s;
//   background: rgb(255, 255, 255);
//   border: 2px solid rgb(4, 6, 8);
//   border-radius: 5px;
//   box-shadow: rgb(210 239 253) 14px 14px;
// }
// @media (min-width: 1024px) {
//   & .card {
//     width: 306px;
//   }
// }
// @media (max-width: 1023px) {
//   & .card {
//     width: 100%;
//   }
// }

// .btn {
//   display: inline-block;
//   font-weight: normal;
//   color: #222;
//   text-align: center;
//   vertical-align: middle;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
//   background-color: transparent;
//   border: 1px solid transparent;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;
// }

// .btn-secondary {
//   color: #21274a;
//   border-color: #49559c;
//   background-color: white;
//   box-shadow: 8px 9px 0px 0px #cbf0ff;
//   margin-bottom: 5px;
// }

// img {
//   box-shadow: rgb(203 240 255) 8px 8px 0px 0px;
// }
