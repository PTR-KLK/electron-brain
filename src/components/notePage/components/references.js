import React from "react"
import styled from "styled-components"
import { shadow, hover } from "../../theme"
import { Link } from "gatsby"

const Container = styled.section`
  width: calc(100% - 4rem);
  max-width: 1024px;
  border: 2px solid ${props => props.theme.text};
  background: ${props => props.theme.primary};
  padding: 1rem;
  margin: 0 0 1rem;
  box-shadow: ${props => shadow(props.theme.secondary)};

  &:hover {
    animation: ${props => hover(props.theme.secondary, props.theme.accent)}
      125ms linear forwards;
  }

  p {
    margin-top: 0;
    font-weight: bold;
  }
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
