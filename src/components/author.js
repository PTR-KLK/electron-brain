import React from "react"
import styled, { withTheme } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.section`
  width: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;

  p {
    width: 100%;
    align-self: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Image = styled(Img)`
  width: 100%;
  max-width: 512px;
  height: auto;
  align-self: center;
`

const Author = withTheme(({ theme: { isDark } }) => {
  const data = useStaticQuery(graphql`
    {
      light: file(relativePath: { eq: "mindmap.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 512
            duotone: { highlight: "#DBDBE6", shadow: "#111218" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      dark: file(relativePath: { eq: "mindmapAlt.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 512
            duotone: { highlight: "#E7E7EE", shadow: "#323248" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Container>
      {isDark ? (
        <Image
          fluid={data.dark.childImageSharp.fluid}
          objectFit="cover"
          alt=""
        />
      ) : (
        <Image
          fluid={data.light.childImageSharp.fluid}
          objectFit="cover"
          alt=""
        />
      )}
      <p>
        Hi there!
        <br />
        This is my electron brain.
        <br />
        <br />
        If you want, you cant toggle this section in the navbar.
      </p>
    </Container>
  )
})

export default Author
