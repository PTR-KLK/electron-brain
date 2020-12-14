import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Graph from "react-graph-vis"
import navigation from "./components/navigation"
import createGraphData from "./components/createGraphData"
import focusNode from "./components/focusNode"
import options from "./components/options"

const Container = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;

  p {
    font-family: monospace;
    position: absolute;
    background-color: #000000;
    font-size: 1rem;
    margin: 1rem;
    bottom: 0;
    left: 0;
  }

  canvas:focus,
  .vis-network:focus {
    outline: none;
  }
`

const GraphComponent = ({ graphActive }) => {
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

  const graphData = createGraphData(nodes)
  const events = {
    select: navigation(graphData),
  }

  return (
    <Container>
      <Graph
        graph={graphData}
        options={options(graphActive)}
        events={events}
        getNetwork={network => focusNode(network, nodes)}
      />
      {!graphActive ? <p>Tap or click to zoom or move</p> : null}
    </Container>
  )
}

export default GraphComponent
