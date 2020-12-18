import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { linkContainer, hover } from "../../theme"
import { useStaticQuery, Link, graphql } from "gatsby"
import { FaSun, FaMoon, FaProjectDiagram } from "react-icons/fa"

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 2rem);
  padding: 0.5rem 0;

  button {
    color: ${props => props.theme.text};
    cursor: pointer;
    margin: 0 0 0 0.5rem;
    display: flex;
    align-items: center;
  }

  a,
  button,
  h1 {
    font-size: 1.375rem;
  }

  h1 {
    margin: 0;
    letter-spacing: -1px;
  }

  a {
    margin: 0 auto 0 0;
  }

  a,
  button {
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    font-family: "Inconsolata", monospace;
    font-weight: bold;
    ${({ theme }) => linkContainer(theme)}
  }

  a:visited {
    color: ${props => props.theme.text};
  }

  a:hover,
  button:hover {
    color: ${props => props.theme.accent};
    animation: ${props => hover(props.theme)} 125ms linear forwards;
  }

  @media (min-width: 375px) {
    h1 {
      letter-spacing: normal;
    }
  }
`

const Navbar = () => {
  const themeContext = useContext(ThemeManagerContext)

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
      <button aria-label="Toggle graph">
        <FaProjectDiagram />
      </button>
      <button
        aria-label="Toggle dark mode"
        onClick={() => themeContext.toggleDark()}
      >
        {themeContext.isDark ? <FaMoon /> : <FaSun />}
      </button>
    </Container>
  )
}

export default Navbar
