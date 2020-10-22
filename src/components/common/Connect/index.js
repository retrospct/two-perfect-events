import styled from 'styled-components'

export const Connect = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  color: var(--textLight-color);
  overflow: hidden;
  & hr,
  & .hr-connect-second {
    position: absolute;
    top: 16px;
    left: 0;
    right: 0;
    background: white;
    height: 2px;
    width: 100%;
    margin: 0;
  }
  & .hr-connect-second {
    top: unset;
    bottom: 16px;
  }
`
