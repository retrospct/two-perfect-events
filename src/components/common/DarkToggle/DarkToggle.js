// import React, { useContext } from 'react'
// import styled from 'styled-components'
// import { ThemeContext } from './ThemeContext'

// const DarkToggle = () => {
//   const { colorMode, setColorMode } = useContext(ThemeContext)
//   if (!colorMode) {
//     return null
//   }
//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={colorMode === 'dark'}
//         onChange={(ev) => {
//           setColorMode(ev.target.checked ? 'dark' : 'light')
//         }}
//       />{' '}
//       Dark
//     </label>
//   )
// }

// const UnstyledButton = styled.button`
//   margin: 0px;
//   padding: 0px;
//   border: none;
//   background: transparent;
//   cursor: pointer;
//   text-align: left;
//   font: inherit;
//   opacity: 0.7;
//   position: relative;
//   border-radius: 5px;
//   width: 40px;
//   height: 32px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
// `

// import React from 'react';
// import styled from 'styled-components';
// import { useSpring, useTrail, animated } from 'react-spring';

// import { BREAKPOINTS } from '@constants';
// import useSound from '@hooks/use-sound.hook';
// import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';
// import { generateId } from '@utils';

// import UnstyledButton from '../UnstyledButton';
// import { ConfigContext } from '../ConfigContext';

// export const DarkModeToggle = ({
//   colorMode,
//   setColorMode,
//   size = 18,
//   ...delegated
// }) => {
//   const prefersReducedMotion = usePrefersReducedMotion();

//   const { current: id } = React.useRef(generateId());

//   const [playOn] = useSound('/sounds/switch-on.mp3');
//   const [playOff] = useSound('/sounds/switch-off.mp3');

//   const isDark = colorMode === 'dark';

//   function toggleColorMode(event) {
//     event.preventDefault();
//     setColorMode(isDark ? 'light' : 'dark');

//     if (isDark) {
//       playOn();
//     } else {
//       playOff();
//     }
//   }

//   const svgSpring = useSpring({
//     transform: isDark ? 'rotate(40deg)' : 'rotate(90deg)',
//     immediate: prefersReducedMotion,
//   });
//   const maskSpring = useSpring({
//     cx: isDark ? 10 : 25,
//     cy: isDark ? 2 : 0,
//     config: {
//       mass: 3.1,
//       friction: 21,
//     },
//     immediate: prefersReducedMotion,
//   });
//   const sunMoonSpring = useSpring({
//     r: isDark ? 8 : 5,
//     immediate: prefersReducedMotion,
//   });

//   const sunDotAngles = [0, 60, 120, 180, 240, 300];

//   const sunDotTrail = useTrail(sunDotAngles.length, {
//     transform: isDark ? 0 : 1,
//     transformOrigin: 'center center',
//     immediate: isDark || prefersReducedMotion,
//     config: {
//       tension: 210,
//       friction: 20,
//     },
//   });

//   return (
//     <IconWrapper
//       onClick={toggleColorMode}
//       aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
//       title={isDark ? 'Activate light mode' : 'Activate dark mode'}
//       {...delegated}
//     >
//       <MoonOrSun
//         width={size}
//         height={size}
//         viewBox="0 0 18 18"
//         style={svgSpring}
//       >
//         <mask id={`moon-mask-${id}`}>
//           <rect x="0" y="0" width="18" height="18" fill="#FFF" />
//           <animated.circle {...maskSpring} r="8" fill="black" />
//         </mask>

//         <animated.circle
//           cx="9"
//           cy="9"
//           fill="var(--color-text)"
//           mask={`url(#moon-mask-${id})`}
//           {...sunMoonSpring}
//         />

//         {/* Sun dots */}
//         <g>
//           {sunDotTrail.map(({ transform, ...props }, index) => {
//             const angle = sunDotAngles[index];
//             const centerX = 9;
//             const centerY = 9;

//             const angleInRads = (angle / 180) * Math.PI;

//             const c = 8; // hypothenuse
//             const a = centerX + c * Math.cos(angleInRads);
//             const b = centerY + c * Math.sin(angleInRads);

//             return (
//               <animated.circle
//                 key={angle}
//                 cx={a}
//                 cy={b}
//                 r={1.5}
//                 fill="var(--color-text)"
//                 style={{
//                   ...props,
//                   transform: transform.interpolate(t => `scale(${t})`),
//                 }}
//               />
//             );
//           })}
//         </g>
//       </MoonOrSun>
//     </IconWrapper>
//   );
// };

// const IconWrapper = styled(UnstyledButton)`
//   opacity: 0.7;
//   position: relative;
//   border-radius: 5px;
//   width: 40px;
//   height: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media ${BREAKPOINTS.mdMin} {
//     &:hover {
//       opacity: 1;
//     }
//   }
// `;

// const MoonOrSun = styled(animated.svg)`
//   position: relative;
//   overflow: visible;
// `;

// const DarkModeToggleContainer = delegated => {
//   const { colorMode, setColorMode } = React.useContext(ConfigContext);

//   return (
//     <DarkModeToggle
//       colorMode={colorMode}
//       setColorMode={setColorMode}
//       {...delegated}
//     />
//   );
// };

// export default DarkModeToggleContainer;
