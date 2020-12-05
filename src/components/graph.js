import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Sigma, RandomizeNodePositions, RelativeSize } from "react-sigma"

const createGraphData = arr => {
  const nodes = []
  const edges = []

  arr.forEach(el =>
    el.outboundReferences.forEach(elem =>
      edges.push({
        id: `${el.id.slice(0, 4)}-${elem.id.slice(0, 4)}`,
        source: el.id,
        target: elem.id,
      })
    )
  )

  arr.forEach(el =>
    nodes.push({
      id: el.id,
      label: el.frontmatter.title,
      link: el.fields.slug,
    })
  )

  return { nodes: nodes, edges: edges }
}

export default function Graph() {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
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
          }
        }
      }
    `
  )

  const graphData = createGraphData(nodes)
  const handleClick = event => navigate(event.data.node.link)

  return (
    <Sigma
      graph={graphData}
      settings={{
        defaultLabelSize: 15,
        drawLabels: true,
        labelSize: "fixed",
        labelThreshold: 5,
        drawEdges: true,
        clone: false,
      }}
      onClickNode={handleClick}
    >
      <RelativeSize initialSize={15} />
      <RandomizeNodePositions />
    </Sigma>
  )
}
