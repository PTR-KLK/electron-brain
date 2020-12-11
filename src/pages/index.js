import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

export default function Home({ data }) {
  const {
    site: { siteMetadata },
    allMarkdownRemark: { edges: pages },
  } = data

  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <h2>Latest updates in the {siteMetadata.title}:</h2>
      <ul>
        {pages.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>— {node.fields.modifiedTime.slice(0, 10)}</span>
              </h3>
              <p>{node.frontmatter.excerpt || node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
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
