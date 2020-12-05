import React, { Suspense } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Graph = React.lazy(() => import("../components/graph"))

export default function Layout({ children }) {
  const isSSR = typeof window === "undefined"

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
      {!isSSR && (
        <Suspense fallback={<div>Loading...</div>}>
          <Graph />
        </Suspense>
      )}
      {children}
    </div>
  )
}
