import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import catchLinks from "./catchLinks"

const Container = styled.article`
  width: calc(100% - 2rem);
  height: 100%;
  flex: 1;
`

const convertDate = str => {
  const date = new Date(str)
  return date.toLocaleDateString()
}

const Article = ({ data }) => {
  const {
    body,
    frontmatter: { title, date, last_modified },
  } = data

  return (
    <Container>
      <h2>{title}</h2>
      <p>
        Published: {convertDate(date)}
        {last_modified !== date
          ? ` | Modified: ${convertDate(last_modified)}`
          : null}
      </p>
      <MDXProvider components={catchLinks}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default Article
