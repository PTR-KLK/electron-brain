import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  position: relative;
  left: 0;
  top: 50vh;
  text-align: center;

  p {
    font-family: monospace;
    margin: 0.5rem 0 0;
    padding: 0 0 0.5rem;
    font-size: 1.25rem;
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
