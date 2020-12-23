import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import List from "./components/list"

const Container = styled.section`
  display: flex;
  flex: 1;
  width: calc(100% - 2rem);
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const Columns = () => {
  const {
    latest: { edges: latest },
    favourites: { edges: favourites },
  } = useStaticQuery(graphql`
    query {
      latest: allMarkdownRemark(
        limit: 10
        sort: { fields: frontmatter___last_modified, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
              date
              last_modified
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
      favourites: allMarkdownRemark(
        filter: { frontmatter: { favourite: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Container>
      <List list={latest} heading="Latest updates:" details />
      <List list={favourites} heading="Favourite parts:" />
    </Container>
  )
}

export default Columns
