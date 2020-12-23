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
    frontmatter: { title, date, last_modified },
  } = data

  return (
    <Container>
      <h2>{title}</h2>
      <p>
        Published: {date}
        {date !== last_modified ? ` | Modified: ${last_modified}` : null}
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}

export default Article
