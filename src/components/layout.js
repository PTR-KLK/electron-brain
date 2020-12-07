import React, { Suspense } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"

const Graph = React.lazy(() => import("../components/graph"))

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
`

const Container = styled.div`
  margin: 0;
  padding: 0 1rem;
  max-width: 768px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
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
          <Link to={`/about/`}>About</Link>
        </nav>
        <main>
          {!isSSR && (
            <Suspense fallback={<div>Loading...</div>}>
              <Graph />
            </Suspense>
          )}
          {children}
        </main>
      </Container>
    </>
  )
}
