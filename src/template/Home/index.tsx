import React from 'react'
import Head from 'next/head'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <S.Container>
        <h1>
          Pagina inicial
        </h1>
      </S.Container>
    </>
  )
}
