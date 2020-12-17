import React from "react"
import styled from "styled-components"
import colors from "../../colors"
import shadow from "../../shadow"
import { hover } from "../../animations"
import { useStaticQuery, Link, graphql } from "gatsby"

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2rem);
  max-width: 1024px;
  padding: 0.5rem 0;

  a,
  h1 {
    font-size: 1.375rem;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    margin: 0;
    padding: 0.25rem 0.5rem;
    font-family: "Inconsolata", monospace;
    font-weight: bold;
    color: ${colors.light};
    background: ${colors.primary};
    box-shadow: ${shadow};
  }

  a:visited {
    color: ${colors.light};
  }

  a:hover {
    animation: ${hover} 125ms linear forwards;
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
      <Link to={`/about`}>About</Link>
    </Container>
  )
}
