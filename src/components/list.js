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
  return (
    <li>
      <h3>
        {details ? (
          <span>{data.fields.modifiedTime.slice(0, 10)} — </span>
        ) : null}
        <Link to={data.fields.slug}>{data.frontmatter.title} </Link>
      </h3>
      {details ? <p>{data.frontmatter.excerpt || data.excerpt}</p> : null}
    </li>
  )
}

export default function List({ list, heading, details }) {
  return (
    <Container>
      <Heading>{heading}</Heading>
      {list.map(({ node }) => (
        <ListItem data={node} key={node.id} details={details} />
      ))}
    </Container>
  )
}
