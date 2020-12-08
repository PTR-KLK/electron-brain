import React, { useState } from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import styled from "styled-components"
import Graph from "react-graph-vis"

const Container = styled.div`
  .vis-network {
    tabindex: 0;
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

const GraphComponent = React.memo(() => {
  const [graphActive, setGraphActive] = useState(false)

  const options = {
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
  }

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

  const activateGraphOnKeypress = e => {
    if (e.keyCode === 32) {
      setGraphActive(!graphActive)
    }
  }

  const events = {
    select: function (event) {
      if (event.event.type === "tap" && event.nodes[0] && graphActive) {
        const link = graphData.nodes.find(el => el.id === event.nodes[0]).link
        return link && navigate(link)
      }
    },
  }

  return (
    <Container
      onClick={() => setGraphActive(!graphActive)}
      onKeyUp={activateGraphOnKeypress}
    >
      <Graph graph={graphData} options={options} events={events} />
    </Container>
  )
})

export default GraphComponent
