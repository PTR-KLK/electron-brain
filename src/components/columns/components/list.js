import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50% - 0.5rem);
  }
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(100% - 0.5rem);
  }
`

const Heading = styled.h2`
  margin: 0 0 1rem;
`

const convertDate = str => {
  const date = new Date(str)
  return date.toLocaleDateString()
}

const ListItem = ({ data, details }) => {
  return (
    <li>
      <h3>
        {details ? (
          <span>{convertDate(data.frontmatter.last_modified)} — </span>
        ) : null}
        <Link to={data.fields.slug}>{data.frontmatter.title} </Link>
      </h3>
      {details ? <p>{data.frontmatter.excerpt || data.excerpt}</p> : null}
    </li>
  )
}
const List = ({ list, heading, details }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Ul>
        {list.map(({ node }) => (
          <ListItem data={node} key={node.id} details={details} />
        ))}
      </Ul>
    </Container>
  )
}

export default List
