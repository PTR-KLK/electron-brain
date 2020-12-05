import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Graph from "../components/graph"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div>
      <Link to={`/`}>
        <h3>My {data.site.siteMetadata.title}</h3>
      </Link>
      <Link to={`/about/`}>About</Link>
      <Graph />
      {children}
    </div>
  )
}
