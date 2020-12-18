import React from "react"
import styled from "styled-components"

const Container = styled.article`
  width: calc(100% - 2rem);
  height: 100%;
  flex: 1;
`
const Article = ({ data }) => {
  const {
    html,
    frontmatter: { title },
  } = data

  return (
    <Container>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}

export default Article
