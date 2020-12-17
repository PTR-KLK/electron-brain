import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Graph from "react-graph-vis"
import navigation from "./components/navigation"
import createGraphData from "./components/createGraphData"
import options from "./components/options"
import { reveal } from "../animations"

const Container = styled.figure`
  animation: ${reveal} 500ms linear forwards;
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
  const [network, setNetwork] = useState({})
  const graphData = createGraphData(data)
  const events = {
    select: navigation(graphData),
  }

  useEffect(() => {
    const handleResize = () => {
      network.redraw()
      network.fit()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [network])

  return (
    <Container>
      <Graph
        graph={graphData}
        options={options(graphActive)}
        events={events}
        getNetwork={network => {
          setNetwork(network)
          network.on("hoverNode", function (params) {
            network.canvas.body.container.style.cursor = "pointer"

            network.on("blurNode", function (params) {
              network.canvas.body.container.style.cursor = "default"
            })
          })
        }}
      />
      {!graphActive ? <p>Tap or click to zoom or move</p> : null}
    </Container>
  )
}

export default GraphComponent
