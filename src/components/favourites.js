import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import List from "./list"

const Favourites = () => {
  const {
    allMarkdownRemark: { edges: pages },
  } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
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
  )

  return <List list={pages} heading="Favourite parts:" />
}

export default Favourites
