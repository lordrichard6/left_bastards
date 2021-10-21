import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'


const Home: NextPage = () => {
  return (
    <MainContainer>
      <Head>
        <title>Left Bastards</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Left Bastards</h1>
      
    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`