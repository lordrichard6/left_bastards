import Head from 'next/head'
import styled from 'styled-components'
import React, { useState } from "react";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from "../components/Navbar/sideBar";
import Header from '../components/_homepage/Header'


export default function Home()  {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainContainer>
      <Head>
        <title>Left Bastards</title>
        <meta name="Left Bastards" content="left bastards" />
        <link rel="icon" href="/logo_gold.png" />
      </Head>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />

      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`