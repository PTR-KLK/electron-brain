import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.section`
  width: calc(100% - 2rem);
  max-width: 1024px;
`

export default function References({ arr, heading }) {
  if (arr.length === 0) return null

  return (
    <Container>
      <p>{heading}</p>
      <ul>
        {arr.map(el => {
          return (
            <li key={el.id}>
              <Link to={el.fields.slug}>{el.frontmatter.title}</Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
