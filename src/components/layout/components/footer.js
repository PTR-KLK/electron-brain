import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  text-align: center;
  width: 100%;
  max-width: 1024px;

  p {
    font-family: "Inconsolata", monospace;
    margin: 0.5rem 0 0;
    padding: 0 0 0.5rem;
  }
`

export default function Footer() {
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
      <p>
        © {author} {year}
      </p>
    </Container>
  )
}
