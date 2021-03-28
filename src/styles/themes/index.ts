import { DefaultTheme, CustomTheme } from 'styled-components'
import { light, dark } from './themes'

const defaultTheme = {
  title: 'light',
  colors: {
    primary: '#171738',
    primcolorAccentary: '#8EF9F3',

    background: '#F5F5F5',
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

function combineTheme(theme: CustomTheme ): any {
  return { ...defaultTheme, ...theme }
}

export { combineTheme, dark, light }
