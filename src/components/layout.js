import React, { Suspense } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"

const Graph = React.lazy(() => import("./graph/graph"))

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
}
`

const Container = styled.div`
  margin: 0;
  padding: 0 1rem;
  max-width: 768px;

  main {
    position: relative;
    top: 300px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`

const Fallback = styled.div`
  position: absolute;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  height: 300px;
`

export default function Layout({ children }) {
  const isSSR = typeof window === "undefined"

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <GlobalStyle />
      <Container>
        <nav>
          <Link to={`/`}>
            <h1>My {data.site.siteMetadata.title}</h1>
          </Link>
          <Link to={`/about`}>About</Link>
        </nav>
        {!isSSR && (
          <Suspense fallback={<Fallback>Loading...</Fallback>}>
            <Graph />
          </Suspense>
        )}
        <main>{children}</main>
      </Container>
    </>
  )
}
