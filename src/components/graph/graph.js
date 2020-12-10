import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Graph from "react-graph-vis"
import navigation from "./components/navigation"
import createGraphData from "./components/createGraphData"
import focusNode from "./components/focusNode"
import options from "./components/options"

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
    select: navigation(graphData, graphActive),
  }

  return (
    <Container onClick={() => setGraphActive(true)}>
      <Graph
        graph={graphData}
        options={options(graphActive)}
        events={events}
        getNetwork={network => focusNode(network, nodes)}
      />
      {!graphActive ? <p>Tap or click to toggle navigation</p> : null}
    </Container>
  )
}

export default GraphComponent
