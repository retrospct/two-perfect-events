const baseTheme = {
  screens: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1480,
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  p: (value) => `padding: ${value};`,
  py: (value) => `padding-top: ${value}; padding-bottom: ${value};`,
  px: (value) => `padding-right: ${value}; padding-left: ${value};`,
  m: (value) => `padding: ${value};`,
  my: (value) => `margin-top: ${value}; margin-bottom: ${value};`,
  mx: (value) => `margin-right: ${value}; margin-left: ${value};`,
}

const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#694a86',
    primaryInverse: '#694a86',
    primaryLighter: '#7c6194',
    secondary: '#8D426C',
    accent: '#BF9000',
    accentLight: '#FBB040',
    accentLightest: '#E9CB99',
    text: '#414042',
    textInverse: '#fff',
    textLight: '#fff',
    heading: '#212121',
    subheading: '#565656',
    // subheading: '#707070',
    link: '#BF9000',
    bg: '#fff',
    bgDark: '#e6e6e6',
    error: '#ff4136',
    disabled: '#707070',
    // offwhite: '#e6e6e6',
    // color: '#000',
  },
  maxW: `${baseTheme.screens.xl}px`,
}

const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#694a86',
    primaryInverse: '#fff',
    primaryLighter: '#7c6194',
    secondary: '#8D426C',
    accent: '#BF9000',
    accentLight: '#FBB040',
    accentLightest: '#E9CB99', // #e7bf86
    text: '#fff',
    textInverse: '#414042',
    textLight: '#fff',
    heading: '#fff',
    subheading: '#e6e6e6',
    link: '#BF9000',
    bg: '#2F384B',
    bgDark: '#1F2B34',
    error: '#ff4136',
    disabled: '#707070',
    // #3D4457
    // #ef86a9
    // offwhite: '#e6e6e6',
    // color: '#fff',
  },
  maxW: `${baseTheme.screens.xl}px`,
}

const superDarkTheme = {
  ...baseTheme,
  colors: {
    primary: '#694a86',
    primaryInverse: '#fff',
    primaryLighter: '#7c6194',
    secondary: '#8D426C',
    accent: '#BF9000',
    accentLight: '#FBB040',
    accentLightest: '#E9CB99', // #e7bf86
    text: '#fff',
    textInverse: '#414042',
    textLight: '#fff',
    heading: '#fff',
    subheading: '#e6e6e6',
    link: '#BF9000',
    bg: '#000', // #2F384B
    bgDark: '#1F2B34', // #1F2B34
    error: '#ff4136',
    // #3D4457
    // #ef86a9
    // offwhite: '#e6e6e6',
    // color: '#fff',
  },
  maxW: `${baseTheme.screens.xl}px`,
}

export { lightTheme, darkTheme, superDarkTheme }

// colors: {
//   primary: '#694a86',
//   primaryLighter: '#7c6194',
//   secondary: '#8D426C',
//   accent: '#BF9000',
//   accentLight: '#FBB040',
//   accentLightest: '#E9CB99',
//   text: '#414042',
//   gray: '#707070',
//   light: '#fff',
//   // blue: '#0099ff',
//   // darkblue: '#00072e',
//   // orange: '#FF9429',
// },
// color: {
//   primary: "#071435",
//   secondary: "#098c8c",
//   accent: "#cca86e",
//   background: {
//     white: "#ffffff",
//     light: "#f8f8f8",
//   },
//   white: {
//     regular: "#ffffff",
//     lessdark: "#faf9f8",
//     dark: "#f6f6f6",
//     darker: "#eeeeee",
//   },
//   black: {
//     lightest: "#ABA8AF",
//     light: "#564F62",
//     regular: "#071435",
//   },
// },

// From gatsby theme-ui before
// export default {
//   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fonts: {
//     body:
//       '"Lato", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     heading:
//       '"Lato-Bold", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
//     monospace: 'Menlo, monospace',
//   },
//   fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
//   fontWeights: {
//     body: 400,
//     heading: 600,
//     bold: 700,
//   },
//   lineHeights: {
//     body: 1.75,
//     heading: 1.25,
//   },
//   colors: {
//     text: '#454f5b',
//     background: '#fff',
//     primary: '#5c6ac4',
//     secondary: '#006fbb',
//     highlight: '#47c1bf',
//     muted: '#e6e6e6',
//     gray: '#dfe3e8',
//     accent: '#f49342',
//     darken: '#00044c',
//     modes: {
//       dark: {
//         text: '#3e4155',
//         background: '#000639',
//         primary: '#9c6ade',
//         secondary: '#b4e1fa',
//         highlight: '#b7ecec',
//         muted: '#e6e6e6',
//       },
//     },
//   },
//   // Variants
//   buttons: {
//     secondary: {
//       fontWeight: 'bold',
//       color: 'white',
//       bg: 'primary',
//       '&:hover': {
//         bg: 'dark',
//       },
//     },
//   },
//   text: {
//     caps: {
//       textTransform: 'uppercase',
//       letterSpacing: '.2em',
//     },
//     heading: {
//       fontFamily: 'heading',
//       fontWeight: 'heading',
//       lineHeight: 'heading',
//     },
//     display: {
//       // extends the text.heading styles
//       variant: 'text.heading',
//       fontSize: [6, 7, 8],
//       fontWeight: 'display',
//     },
//   },
//   cards: {
//     primary: {
//       padding: 2,
//       borderRadius: 4,
//       boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
//     },
//   },
//   // Used to style MDX and can be used in React components with the Styled component
//   // https://theme-ui.com/styled
//   styles: {
//     root: {
//       fontFamily: 'body',
//       lineHeight: 'body',
//       fontWeight: 'body',
//     },
//     h1: {
//       color: 'text',
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//       fontSize: 5,
//     },
//     h2: {
//       color: 'text',
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//       fontSize: 4,
//     },
//     h3: {
//       color: 'text',
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//       fontSize: 3,
//     },
//     h4: {
//       color: 'text',
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//       fontSize: 2,
//     },
//     h5: {
//       color: 'text',
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//       fontSize: 1,
//     },
//     h6: {
//       color: 'text',
//       fontFamily: 'heading',
//       lineHeight: 'heading',
//       fontWeight: 'heading',
//       fontSize: 0,
//     },
//     p: {
//       color: 'text',
//       fontFamily: 'body',
//       fontWeight: 'body',
//       lineHeight: 'body',
//     },
//     a: {
//       color: 'primary',
//     },
//     pre: {
//       fontFamily: 'monospace',
//       overflowX: 'auto',
//       code: {
//         color: 'inherit',
//       },
//     },
//     code: {
//       fontFamily: 'monospace',
//       fontSize: 'inherit',
//     },
//     table: {
//       width: '100%',
//       borderCollapse: 'separate',
//       borderSpacing: 0,
//     },
//     th: {
//       textAlign: 'left',
//       borderBottomStyle: 'solid',
//     },
//     td: {
//       textAlign: 'left',
//       borderBottomStyle: 'solid',
//     },
//     img: {
//       maxWidth: '100%',
//     },
//   },
// }
