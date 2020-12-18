import React from "react"
import styled from "styled-components"
import { linkContainer, hover } from "../../theme"
import { useStaticQuery, Link, graphql } from "gatsby"

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2rem);
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
    ${({ theme }) => linkContainer(theme)}
  }

  a:visited {
    color: ${props => props.theme.text};
  }

  a:hover {
    color: ${props => props.theme.accent};
    animation: ${props => hover(props.theme)} 125ms linear forwards;
  }
`

const Navbar = () => {
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

export default Navbar
