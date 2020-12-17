import React from "react"
import styled from "styled-components"
import colors from "../../colors"
import shadow from "../../shadow"
import { hover } from "../../animations"
import { Link } from "gatsby"

const Container = styled.section`
  width: calc(100% - 4rem);
  max-width: 1024px;
  color: ${colors.light};
  background: ${colors.primary};
  padding: 1rem;
  margin: 0 0 1rem;
  box-shadow: ${shadow};

  &:hover {
    animation: ${hover} 125ms linear forwards;
  }

  a:link {
    color: ${colors.light};
  }

  a:visited {
    color: ${colors.secondary};
  }

  a:hover {
    color: ${colors.tertiary};
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
