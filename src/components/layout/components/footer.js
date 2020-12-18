import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { sectionContainer } from "../../theme"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  ${({ theme }) => sectionContainer(theme)}
  flex-direction: column;
  align-items: center;
  width: calc(100% - 2px - 2rem);
  margin: 0.5rem 0 0.5rem;
  padding: 0.5rem 0;

  p,
  label {
    font-size: 1.25rem;
    font-family: "Inconsolata", monospace;
  }

  p {
    margin: 0.5rem 0 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    p,
    label {
      margin: 0 0.5rem;
    }
  }
`

const Footer = () => {
  const themeContext = useContext(ThemeManagerContext)

  const {
    site: {
      siteMetadata: { author, year },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            year
          }
        }
      }
    `
  )

  return (
    <Container role="contentinfo">
      <label>
        <input
          type="checkbox"
          onChange={() => themeContext.toggleDark()}
          checked={themeContext.isDark}
        />{" "}
        Dark mode
      </label>
      <p>
        ©{author} {year}
      </p>
    </Container>
  )
}

export default Footer
