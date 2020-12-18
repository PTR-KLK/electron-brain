import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import List from "../components/list"
import Graph from "../components/graph/graphWrapper"

const Columns = styled.section`
  display: flex;
  flex: 1;
  width: calc(100% - 2rem);
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
    max-width: 1024px;
  }
`

const Home = ({ data }) => {
  const {
    site: { siteMetadata },
    latest: { edges: latest },
    favourites: { edges: favourites },
    graph: { nodes: graph },
  } = data

  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Graph data={graph} />
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
    graph: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
        }
        fields {
          slug
        }
        outboundReferences {
          ... on MarkdownRemark {
            id
            frontmatter {
              title
            }
          }
        }
        inboundReferences {
          ... on MarkdownRemark {
            id
            frontmatter {
              title
            }
          }
        }
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
export default Home
