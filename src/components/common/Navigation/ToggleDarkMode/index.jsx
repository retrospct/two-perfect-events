import React from 'react'
import styled from 'styled-components'
import Toggle from 'react-toggle'
import moon from './moon.png'
import sun from './sun.png'
import 'react-toggle/style.css'

export const Toggler = styled(Toggle)`
  position: absolute;
  top: 2.2rem;
  right: 0.5rem;

  @media (max-width: ${({ theme }) => theme.mq.xl}px) {
    top: 2.1rem;
    right: 0.1rem;
  }
  /* @media (max-width: ${({ theme }) => theme.mq.xl}px) {
    top: 3rem;
  } */

  .react-toggle-track {
    background-color: #ddd;
  }

  &:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #5d5d5d;
  }

  &.react-toggle--checked .react-toggle-track {
    background-color: #5d5d5d;
  }

  &.react-toggle--checked:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #ddd;
  }
  .react-toggle-thumb {
    border: 1px solid #ddd;
    background-color: #fff;
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: #fafafa;
  }

  .react-toggle-track .react-toggle-track-check {
    width: 16px;
    height: 16px;
    left: 5px;
  }
  .react-toggle-track .react-toggle-track-x {
    width: 16px;
    height: 16px;
    right: 5px;
  }

  &.react-toggle--focus .react-toggle-thumb {
    /* box-shadow: 0px 0px 2px 3px rgb(255, 167, 196); */
    box-shadow: 0px 0px 2px 3px var(--primary-color);
  }

  &:active:not(.react-toggle--disabled) .react-toggle-thumb {
    /* box-shadow: 0px 0px 2px 3px rgb(255, 167, 196); */
    box-shadow: 0px 0px 2px 3px var(--primary-color);
  }

  &:active:not(.react-toggle--disabled) .react-toggle-thumb {
    /* box-shadow: 0px 0px 2px 3px rgb(255, 167, 196); */
    box-shadow: 0px 0px 2px 3px var(--primary-color);
  }
  &.react-toggle--focus .react-toggle-thumb {
    /* box-shadow: 0px 0px 2px 3px rgb(255, 167, 196); */
    box-shadow: 0px 0px 2px 3px var(--primary-color);
  }

  &:active:not(.react-toggle--disabled) .react-toggle-thumb {
    /* box-shadow: 0px 0px 5px 5px rgb(255, 167, 196); */
    box-shadow: 0px 0px 2px 3px var(--primary-color);
  }
`

export const ToggleDarkMode = ({ currentTheme, toggleTheme, className }) => (
  <Toggler
    className={className}
    // defaultChecked={currentTheme !== 'light'}
    checked={currentTheme !== 'light'}
    onChange={toggleTheme}
    icons={{
      checked: <img style={{ pointerEvents: 'none' }} width="16" height="16" alt="moon" aria-hidden src={moon} />,
      unchecked: <img style={{ pointerEvents: 'none' }} width="16" height="16" alt="sun" aria-hidden src={sun} />,
    }}
  />
)
