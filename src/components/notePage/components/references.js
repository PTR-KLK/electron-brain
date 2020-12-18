import React from "react"
import styled from "styled-components"
import { sectionContainer } from "../../theme"
import { Link } from "gatsby"

const Container = styled.section`
  width: calc(100% - 2px - 2rem);
  flex-direction: column;
  padding: 1rem 0;
  margin: 0 0 1rem;
  ${({ theme }) => sectionContainer(theme)}

  p {
    margin: 0 1rem;
    font-weight: bold;
  }

  ul {
    margin: 1rem 1rem 0;
  }
`

const References = ({ arr, heading }) => {
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

export default References
