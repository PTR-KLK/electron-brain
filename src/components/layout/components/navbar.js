import React from "react"
import styled from "styled-components"
import { shadow, hover } from "../../theme"
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
    border: 2px solid ${props => props.theme.text};
    background: ${props => props.theme.primary};
    box-shadow: ${props => shadow(props.theme.secondary)};
  }

  a:visited {
    color: ${props => props.theme.text};
  }

  a:hover {
    color: ${props => props.theme.accent};
    animation: ${props => hover(props.theme.secondary, props.theme.accent)}
      125ms linear forwards;
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
