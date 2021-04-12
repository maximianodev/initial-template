import React from 'react'
import Head from 'next/head'
import * as S from './styles'
import { request, gql } from 'graphql-request'
import { getPosts } from '../../graphql/queries/getPosts'

request(process.env.GRAPHQL_URL, getPosts).then((data) => console.log(data))

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
