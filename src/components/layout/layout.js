import React, { Suspense } from "react"
import styled, { createGlobalStyle } from "styled-components"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Fallback from "./components/fallback"

const Graph = React.lazy(() => import("./components/graph/graph"))

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
}
`

const Main = styled.main`
  position: relative;
  top: 50vh;
  margin: 0;
  padding: 0 1rem;
  max-width: 768px;
  min-height: calc(50vh - 3.5rem);

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`

export default function Layout({ children }) {
  const isSSR = typeof window === "undefined"

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {!isSSR && (
        <Suspense fallback={<Fallback />}>
          <Graph />
        </Suspense>
      )}
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
