import React from "react"
import styled from "styled-components"
import colors from "../../colors"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.footer`
  text-align: center;
  width: 100%;
  background: ${colors.primary};
  color: ${colors.light};
  font-family: "Inconsolata", monospace;
  margin: 0.5rem 0 0;
  padding: 0.5rem 0;
  font-size: 1.25rem;
  box-shadow: 4px -4px 0px 0px ${colors.secondary};
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
      ©{author} {year}
    </Container>
  )
}
