import React from "react"
import styled from "styled-components"
import { useStaticQuery, Link, graphql } from "gatsby"

const Container = styled.nav`
  position: absolute;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  padding: 0.5rem 0;

  a {
    text-decoration: none;
  }

  h1,
  p {
    margin: 0 1rem;
    font-family: monospace;
    color: #ffffff;
    background-color: #000000;
  }

  p {
    font-size: 1.25rem;
  }
`

export default function Navbar() {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
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
    <Container>
      <Link to={`/`}>
        <h1>My {title}</h1>
      </Link>
      <Link to={`/about`}>
        <p>About</p>
      </Link>
    </Container>
  )
}
