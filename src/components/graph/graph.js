import React from "react"
import styled from "styled-components"
import Graph from "react-graph-vis"
import navigation from "./components/navigation"
import createGraphData from "./components/createGraphData"
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

const GraphComponent = ({ graphActive, data }) => {
  const graphData = createGraphData(data)
  const events = {
    select: navigation(graphData),
  }

  return (
    <Container>
      <Graph graph={graphData} options={options(graphActive)} events={events} />
      {!graphActive ? <p>Tap or click to zoom or move</p> : null}
    </Container>
  )
}

export default GraphComponent
