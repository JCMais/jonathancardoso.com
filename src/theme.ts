const fonts = {
  mono: 'Fira Mono',
  sans: 'Quicksand, Lato, Helvetica, sans-serif',
  serif: 'Karma, Times, serif',
}

const gray = {
  1: 'hsl(0,0%,32%)',
  2: 'hsl(0,0%,47%)',
  3: 'hsl(0,0%,58%)',
  4: 'hsl(0,0%,68%)',
  5: 'hsl(0,0%,77%)',
  6: 'hsl(0,0%,85%)',
  7: 'hsl(0,0%,93%)',
}

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    backgroundDarker: '#f5f5f5',
    text: '#000',
    background: '#fff',
    // primary: '#07c',
    primary: '#080808',
    secondary: '#30c',
    therdiary: '#474747',
    muted: '#f6f6f9',
    highlight: 'hsla(205, 100%, 40%, 0.125)',
    inactiveGray: gray['5'],
    // 635E69
    gray,
  },
  fonts: {
    body: fonts.sans,
    heading: fonts.serif,
    monospace: fonts.mono,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 36, 40, 48, 64, 96],
  fontWeights: {
    body: 400,
    semiBold: 600,
    bold: 700,
    subHeading: 600,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      fontSize: 7,
    },
    subHeading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'subHeading',
      color: 'therdiary',
      fontSize: 6,
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: [5, 6, 7],
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      fontSize: 2,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    footer: {
      fontFamily: 'body',
      fontSize: [1, 2],
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
      boxShadow: 'card',
    },
    link: {
      color: 'primary',
    },
    linkHeader: {
      color: 'primary',
      textDecoration: 'underline',
      fontFamily: 'body',
    },
    nav: {
      fontSize: 1,
      fontWeight: 'bold',
      display: 'inline-block',
      p: 2,
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus,.active': {
        color: 'primary',
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'background',
      bg: 'primary',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 2px',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  },
}
