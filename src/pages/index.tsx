import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import Head from 'next/head'
import { Container } from '../styles/pages/Index/index'
import Header from '../components/Header'
import { light, dark } from '../styles/themes/index'
import usePersistedState from '../utils/usePersistedState'

export default function Home() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Head>
        <title>Dashboard</title>
      </Head>

      <Header toggleTheme={toggleTheme}/>

      <Container>
        <h1>
          Pagina inicial
        </h1>
      </Container>
    </ThemeProvider>
  )
}
