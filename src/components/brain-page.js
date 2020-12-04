import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "./layout"
export default function BrainPage({ data }) {
  const note = data.markdownRemark

  return (
    <Layout>
      <div>
        <h1>{note.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: note.html }} />
      </div>
      {note.inboundReferences || note.outboundReferences ? <hr /> : null}
      {note.outboundReferences.length !== 0 ? (
        <div>
          <h4>In this page:</h4>
          <ul>
            {note.outboundReferences.map(el => {
              return (
                <li key={el.id}>
                  <Link to={el.fields.slug}>{el.frontmatter.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
      {note.inboundReferences.length !== 0 ? (
        <div>
          <h4>Referred in:</h4>
          <ul>
            {note.inboundReferences.map(el => {
              return (
                <li key={el.id}>
                  <Link to={el.fields.slug}>{el.frontmatter.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
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
