import React, { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled from "styled-components"
import Graph from "react-graph-vis"

const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;

  p {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 1rem;
    font-family: monospace;
    background: #ffffff;
  }

  canvas:focus,
  .vis-network:focus {
    outline: none;
  }
`

const createGraphData = arr => {
  const nodes = []
  const edges = []

  arr.forEach(el =>
    el.outboundReferences.forEach(elem =>
      edges.push({
        from: el.id,
        to: elem.id,
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

const findCurrentNodes = (arr, pathname) => {
  const node = arr.find(el => el.fields.slug === pathname)
  const mapReferences = arr => arr.map(el => el.id)

  return node
    ? [
        node.id,
        ...mapReferences(node.outboundReferences),
        ...mapReferences(node.inboundReferences),
      ]
    : []
}

const options = graphActive => ({
  layout: {
    improvedLayout: true,
    randomSeed: 1,
  },
  edges: {
    color: "#000000",
    chosen: false,
    arrows: {
      to: false,
      from: false,
    },
  },
  nodes: {
    fixed: true,
    shape: "square",
    size: 6,
    color: "#000000",
    font: {
      background: "#ffffff",
      face: "monospace",
    },
  },
  physics: {
    enabled: false,
  },
  interaction: {
    dragView: graphActive,
    zoomView: graphActive,
  },
  height: "300px",
  autoResize: true,
})

const GraphComponent = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(
    graphql`
      {
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
            inboundReferences {
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
  const [graphActive, setGraphActive] = useState(false)

  const graphData = createGraphData(nodes)

  const events = {
    select: function (event) {
      if (event.event.type === "tap" && event.nodes[0] && graphActive) {
        const link = graphData.nodes.find(el => el.id === event.nodes[0]).link
        return link && navigate(link)
      }
    },
  }

  return (
    <Container onClick={() => setGraphActive(true)}>
      <Graph
        graph={graphData}
        options={options(graphActive)}
        events={events}
        getNetwork={network => {
          const currNodes = findCurrentNodes(nodes, window.location.pathname)
          network.fit({
            nodes: currNodes,
          })
          if (currNodes.length > 0) {
            network.selectNodes([currNodes[0]])
          }
        }}
      />
      {!graphActive ? <p>Tap or click to toggle navigation</p> : null}
    </Container>
  )
}

export default GraphComponent
