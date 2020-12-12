import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import List from "./list"

const Latest = () => {
  const {
    allMarkdownRemark: { edges: pages },
  } = useStaticQuery(
    graphql`
      {
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
  )

  return <List list={pages} heading="Latest updates:" details />
}

export default Latest
