import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import References from "./components/references"
import Article from "./components/article"
import Graph from "../graph/graphWrapper"
import Seo from "../seo"

export default function NotePage({ data }) {
  const note = data.markdownRemark

  return (
    <Layout>
      <Seo
        title={note.frontmatter.title}
        description={note.frontmatter.excerpt}
      />
      <Graph height={25} data={[note]} />
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
