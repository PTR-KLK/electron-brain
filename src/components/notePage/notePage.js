import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import References from "./components/references"
import Article from "./components/article"
import Graph from "../graph/graphWrapper"
import Seo from "../seo"
import GraphButton from "./components/graphButton"
import { connect } from "react-redux"

const mapStateToProps = ({ graph }) => {
  return { graph }
}

const NotePage = ({ data, graph }) => {
  const note = data.markdownRemark

  return (
    <Layout button={<GraphButton />}>
      <Seo
        title={note.frontmatter.title}
        description={note.frontmatter.excerpt}
      />
      {graph ? <Graph data={[note]} /> : null}
      <Article data={note} />
      <References heading="In this note:" arr={note.outboundReferences} />
      <References heading="Reffered in:" arr={note.inboundReferences} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
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
          fields {
            slug
          }
        }
      }
      inboundReferences {
        ... on MarkdownRemark {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default connect(mapStateToProps, null)(NotePage)
