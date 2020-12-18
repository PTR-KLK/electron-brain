import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { shadow, hover } from "../../theme"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 4px - 2rem);
  background: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.text};
  margin: 0.5rem 0 0.5rem;
  padding: 0.5rem 0;
  box-shadow: ${props => shadow(props.theme.secondary)};

  p,
  label {
    font-size: 1.25rem;
    font-family: "Inconsolata", monospace;
  }

  p {
    margin: 0.5rem 0 0;
  }

  &:hover {
    animation: ${props => hover(props.theme.secondary, props.theme.accent)}
      125ms linear forwards;
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

export default function Footer(props) {
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
    <Container>
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
