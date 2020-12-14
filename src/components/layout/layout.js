import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Hero from "./components/hero"

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
  }
`

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Article = styled.article`
  width: calc(100% - 2rem);
  max-width: 768px;
  height: 100%;
  min-height: calc(
    ${props => (props.height ? `${100 - props.height}vh` : "50vh")} - 2.25rem
  );
`

export default function Layout({ children, heroHeight }) {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <Hero height={heroHeight} />
      <Article height={heroHeight}>{children}</Article>
      <Footer />
    </Container>
  )
}
