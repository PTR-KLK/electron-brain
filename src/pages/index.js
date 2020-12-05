import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Latest updates in the {data.site.siteMetadata.title}:</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>— {node.fields.modifiedTime.slice(0, 10)}</span>
            </h3>
            <p>{node.frontmatter.excerpt || node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
  }
`
