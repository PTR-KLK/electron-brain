import React from "react"
import styled from "styled-components"
import { sectionContainer } from "../../theme"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  ${({ theme }) => sectionContainer(theme)}
  justify-content: center;
  margin: 0.5rem 0 0.5rem;
  padding: 0.5rem 0;

  p {
    margin: 0;
    font-size: 1.25rem;
    font-family: "Inconsolata", monospace;
  }
`

const Footer = () => {
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
        ©{author} {year}
      </p>
    </Container>
  )
}

export default Footer
