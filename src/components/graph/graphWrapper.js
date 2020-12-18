import React, { useState, Suspense } from "react"
import styled from "styled-components"
import { shadow, hover, reveal } from "../theme"

const Graph = React.lazy(() => fakeDelay(500)(import("./graph")))

const Container = styled.div`
  width: calc(100% - 4px - 2rem);
  display: flex;
  height: ${props => (props.height ? `${props.height}vh` : "50vh")};
  background: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.text};
  justify-content: center;
  box-shadow: ${props => shadow(props.theme.secondary)};

  p {
    align-self: center;
    font-family: "Inconsolata", monospace;
    background-color: ${props => props.theme.primary};
  }

  canvas:focus,
  .vis-network:focus {
    outline: none;
  }

  &:hover {
    animation: ${props => hover(props.theme.secondary, props.theme.accent)}
      125ms linear forwards;
  }
`

const Fallback = styled.p`
  font-size: 1.5rem;
  animation: ${reveal} 250ms linear 250ms reverse forwards;
`

// https://stackoverflow.com/questions/54158994/react-suspense-lazy-delay

function fakeDelay(ms) {
  return promise =>
    promise.then(
      data =>
        new Promise(resolve => {
          setTimeout(() => resolve(data), ms)
        })
    )
}

const GraphWrapper = ({ height, data }) => {
  const isSSR = typeof window === "undefined"
  const [graphActive, setGraphActive] = useState(false)

  return (
    <Container height={height} onClick={() => setGraphActive(!graphActive)}>
      {!isSSR && (
        <Suspense fallback={<Fallback>Loading...</Fallback>}>
          <Graph graphActive={graphActive} data={data} />
        </Suspense>
      )}
    </Container>
  )
}

export default GraphWrapper
