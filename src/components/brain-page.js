import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import References from "./references"

export default function BrainPage({ data }) {
  const note = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{note.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.html }} />
      </div>
      <hr />
      <References heading="In this note:" arr={note.outboundReferences} />
      <References heading="Reffered in:" arr={note.inboundReferences} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
