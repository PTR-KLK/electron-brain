import React from "react"
import styled, { keyframes } from "styled-components"
import Graph from "react-graph-vis"
import navigation from "./components/navigation"
import createGraphData from "./components/createGraphData"
import options from "./components/options"

const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Container = styled.figure`
  animation: ${reveal} 1s linear forwards;
  opacity: 0;
  position: relative;
  margin: 0;
  width: 100%;
  height: auto;

  p {
    position: absolute;
    margin: 1rem;
    bottom: 0;
    left: 0;
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
