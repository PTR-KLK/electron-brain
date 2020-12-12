import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 0.5rem);
  }
`

const Heading = styled.h2`
  margin: 0 0 1rem;
`

const ListItem = ({ data, details }) => {
  const { node } = data

  return (
    <li key={node.id}>
      <h3>
        {details ? (
          <span>{node.fields.modifiedTime.slice(0, 10)} — </span>
        ) : null}
        <Link to={node.fields.slug}>{node.frontmatter.title} </Link>
      </h3>
      {details ? <p>{node.frontmatter.excerpt || node.excerpt}</p> : null}
    </li>
  )
}

export default function List({ list, heading, details }) {
  return (
    <Container>
      <Heading>{heading}</Heading>
      {list.map(el => (
        <ListItem data={el} details={details} />
      ))}
    </Container>
  )
}
