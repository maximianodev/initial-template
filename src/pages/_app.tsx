import React from 'react'

import usePersistedState from '../utils/usePersistedState'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import { combineTheme, light, dark } from '../styles/themes/index'

import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', combineTheme(light))

  const toggleTheme = () => {
      setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp