import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import References from "./components/references"
import Seo from "../seo"
import Graph from "../graph/graphWrapper"

export default function NotePage({ data }) {
  const note = data.markdownRemark

  return (
    <>
      <Graph height={25} data={[note]} />
      <Layout heroHeight={25}>
        <Seo
          title={note.frontmatter.title}
          description={note.frontmatter.excerpt}
        />
        <article>
          <h2>{note.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: note.html }} />
        </article>
        <hr />
        <References heading="In this note:" arr={note.outboundReferences} />
        <References heading="Reffered in:" arr={note.inboundReferences} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
