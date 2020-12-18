import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./components/navbar"
import Footer from "./components/footer"

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    background: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }

  a {
    color: ${props => props.theme.text};
  }

  a:visited {
    color: ${props => props.theme.secondary};
  }

  a:hover, a:active {
    color: ${props => props.theme.accent};
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

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
