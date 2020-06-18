// import React from 'react'
// // import styled from 'styled-components'
// // import Toggle from 'react-toggle'

// export const DarkModeButton = ({ currentTheme, toggleTheme, className }) => (
//   // <Toggler
//   //   className={className}
//   //   defaultChecked={currentTheme === 'dark'}
//   //   onChange={toggleTheme}
//   //   icons={{
//   //     checked: <img style={{ pointerEvents: 'none' }} width="16" height="16" alt="moon" aria-hidden src={moon} />,
//   //     unchecked: <img style={{ pointerEvents: 'none' }} width="16" height="16" alt="sun" aria-hidden src={sun} />,
//   //   }}
//   // />
//   <button type="button" aria-label="Activate light mode" title="Activate light mode" className="css-1fyjaoy">
//     <div className="dark ? css-m5l226 : css-1i3hy7">:before :after</div>
//     <div className="dark ? css-1a7cilm : css-1n8xon3" />
//   </button>
// )

// const css = `
// // Button CSS
// @media screen and (min-width: 40em)
// .css-1fyjaoy {
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
// }
// .css-1fyjaoy {
//     position: relative;
//     -webkit-align-items: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     background-color: transparent;
//     border: 0;
//     border-radius: 5px;
//     display: -webkit-inline-box;
//     display: -webkit-inline-flex;
//     display: -ms-inline-flexbox;
//     display: inline-flex;
//     cursor: pointer;
//     -webkit-box-pack: center;
//     -webkit-justify-content: center;
//     -ms-flex-pack: center;
//     justify-content: center;
//     opacity: 0.6;
//     -webkit-transition: opacity 0.3s ease;
//     transition: opacity 0.3s ease;
//     width: 40px;
//     height: 40px;
//     -webkit-transform: scale(0.8);
//     -ms-transform: scale(0.8);
//     transform: scale(0.8);
// }

// // Moon CSS
// .css-1i3hy7 {
//     background-color: #FBB040;
//     border-radius: 50%;
//     overflow: hidden;
//     position: relative;
//     -webkit-transform: scale(1);
//     -ms-transform: scale(1);
//     transform: scale(1);
//     -webkit-transition: all 0.45s ease;
//     transition: all 0.45s ease;
//     width: 24px;
//     height: 24px;
// }
// .css-1i3hy7::before {
//     background-color: var(--theme-ui-colors-background,hsl(0,0%,100%));
//     border: 2px solid;
//     border-color: var(--theme-ui-colors-background,hsl(0,0%,100%));
//     border-radius: 50%;
//     content: "";
//     width: 24px;
//     height: 24px;
//     opacity: 1;
//     position: absolute;
//     right: -9px;
//     top: -9px;
//     -webkit-transform: translate(0,0);
//     -ms-transform: translate(0,0);
//     transform: translate(0,0);
//     -webkit-transition: -webkit-transform 0.45s ease;
//     -webkit-transition: transform 0.45s ease;
//     transition: transform 0.45s ease;
// }
// .css-1i3hy7::after {
//     border-radius: 50%;
//     box-shadow: 0 -23px 0 hsl(0,0%,10%), 0 23px 0 hsl(0,0%,10%), 23px 0 0 hsl(0,0%,10%), -23px 0 0 hsl(0,0%,10%), 15px 15px 0 hsl(0,0%,10%), -15px 15px 0 hsl(0,0%,10%), 15px -15px 0 hsl(0,0%,10%), -15px -15px 0 hsl(0,0%,10%);
//     content: "";
//     width: 8px;
//     height: 8px;
//     left: 50%;
//     margin: -4px 0 0 -4px;
//     position: absolute;
//     top: 50%;
//     -webkit-transform: scale(0);
//     -ms-transform: scale(0);
//     transform: scale(0);
//     -webkit-transition: all 0.35s ease;
//     transition: all 0.35s ease;
// }

// // Sun CSS
// .css-m5l226 {
//     background-color: hsl(0,0%,100% ));#E9CB99
//     position: relative;
//     transform: scale(0.55);
//     width: 24px;
//     height: 24px;
//     border-radius: 50%;
//     overflow: visible;
//     transition: all 0.45s ease 0s;
// }
// .css-m5l226::before {
//     background-color: var(--theme-ui-colors-background,hsl(0,0%,5%));
//     content: "";
//     width: 24px;
//     height: 24px;
//     opacity: 0;
//     position: absolute;
//     right: -9px;
//     top: -9px;
//     transform: translate(14px, -14px);
//     border-width: 2px;
//     border-style: solid;
//     border-image: initial;
//     border-radius: 50%;
//     transition: transform 0.45s ease 0s;
// }
// .css-m5l226::after {
//     box-shadow: rgb(255, 255, 255) 0px -23px 0px, rgb(255, 255, 255) 0px 23px 0px, rgb(255, 255, 255) 23px 0px 0px, rgb(255, 255, 255) -23px 0px 0px, rgb(255, 255, 255) 15px 15px 0px, rgb(255, 255, 255) -15px 15px 0px, rgb(255, 255, 255) 15px -15px 0px, rgb(255, 255, 255) -15px -15px 0px;
//     content: "";
//     width: 8px;
//     height: 8px;
//     left: 50%;
//     position: absolute;
//     top: 50%;
//     transform: scale(1);
//     border-radius: 50%;
//     margin: -4px 0px 0px -4px;
//     transition: all 0.35s ease 0s;
// }
// #E9CB99
// #FBB040

// // Mask for Sun? CSS
// .css-1a7cilm {
//     position: absolute;
//     right: -1px;
//     top: -8px;
//     height: 24px;
//     width: 24px;
//     background-color: hsl(0,0%,5% ));
//     transform: translate(14px, -14px);
//     opacity: 0;
//     border-radius: 50%;
//     border-width: 0px;
//     border-style: initial;
//     border-color: initial;
//     border-image: initial;
//     transition: transform 0.45s ease 0s;
// }

// // Mask for Moon? CSS
// .css-1n8xon3 {
//     position: absolute;
//     right: -4px;
//     top: -1px;
//     height: 28px;
//     width: 28px;
//     border-radius: 75%;
//     border: 0;
//     background-color: var(--theme-ui-colors-background,hsl(0,0%,100%));
//     -webkit-transform: translate(0,0);
//     -ms-transform: translate(0,0);
//     transform: translate(0,0);
//     opacity: 1;
//     -webkit-transition: -webkit-transform 0.45s ease;
//     -webkit-transition: transform 0.45s ease;
//     transition: transform 0.45s ease;
// }
// // My edited version of Moon Mask
// .css-1n8xon3 {
//     position: absolute;
//     right: -4px;
//     top: -1px;
//     height: 28px;
//     width: 28px;
//     border-radius: 75%;
//     border: 0;
//     background-color: var(--theme-ui-colors-background,hsl(0,0%,100%));
//     -webkit-transform: translate(0,0);
//     -ms-transform: translate(0,0);
//     transform: translate(0,0);
//     opacity: 1;
//     -webkit-transition: -webkit-transform 0.45s ease;
//     -webkit-transition: transform 0.45s ease;
//     transition: transform 0.45s ease;
// }
// `
