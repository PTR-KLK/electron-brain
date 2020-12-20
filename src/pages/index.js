import React from "react"
import { graphql } from "gatsby"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Columns from "../components/columns/columns"
import Graph from "../components/graph/graphWrapper"
import Author from "../components/author"
import AuthorButton from "../components/authorButton"

const mapStateToProps = ({ author }) => {
  return { author }
}

const Home = ({ data, author }) => {
  const {
    site: { siteMetadata },
    graph: { nodes: graph },
  } = data

  return (
    <Layout button={<AuthorButton />}>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      {author ? <Author /> : null}
      <Columns />
      <Graph data={graph} />
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
  }
`
export default connect(mapStateToProps, null)(Home)
