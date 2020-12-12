import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import List from "../components/list"

const Columns = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export default function Home({ data }) {
  const {
    site: { siteMetadata },
    latest: { edges: latest },
    favourites: { edges: favourites },
  } = data

  console.log(latest, favourites)

  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Columns>
        <List list={latest} heading="Latest updates:" details />
        <List list={favourites} heading="Favourite parts:" />
      </Columns>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    latest: allMarkdownRemark(
      limit: 10
      sort: { fields: fields___modifiedTime, order: DESC }
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
            modifiedTime
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
            modifiedTime
          }
          excerpt
        }
      }
    }
  }
`
