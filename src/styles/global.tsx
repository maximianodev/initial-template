import { createGlobalStyle, DefaultTheme } from 'styled-components'
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      primcolorAccentary: string,
      light: string,
      dark: string,
      colorGrey: string,
      colorText: string,
      colorLabel: string,
      colorDisabled: string,
    },
    device: {
      maxMobile: string,
      maxTablet: string
    },
    fontSize: {
      lengthSm1: string,
      lengthSm2: string,
      lengthSm3: string,
      lengthMd1: string,
      lengthMd2: string,
      lengthMd3: string,
      lengthLg1: string,
      lengthLg2: string,
      lengthLg3: string
    }
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    color: #565360;
  }
  
  @media (max-width: 1024px) {
    html {
        font-size: 93.75%;
    }
  }
  @media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }
  }
`
const theme: DefaultTheme = {
  colors: {
    primary: '#8739f9',
    primcolorAccentary: '#37b9f1',
    light: '#fff',
    dark: '#000',
    colorGrey: '#F2F5F5',
    colorText: '#565360',
    colorLabel: '#908E9B',
    colorDisabled: '#E1DFE9',
  },
  device: {
    maxMobile: '768px',
    maxTablet: '1080px'
  },
  fontSize: {
    lengthSm1: '.25rem',
    lengthSm2: '.5rem',
    lengthSm3: '.75rem',
    lengthMd1: '1rem',
    lengthMd2: '1.25rem',
    lengthMd3: '1.5rem',
    lengthLg1: '2rem',
    lengthLg2: '3rem',
    lengthLg3: '4rem'
  }
}

export { GlobalStyle, theme }