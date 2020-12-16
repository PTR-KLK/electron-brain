import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: #FFFAFF;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export default function Layout({ children }) {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}
