import React, { useState, Suspense } from "react"
import styled from "styled-components"

const Graph = React.lazy(() => import("../components/graph/graph"))

const Container = styled.div`
  width: 100%;
  display: flex;
  height: ${props => (props.height ? `${props.height}vh` : "50vh")};
  background-color: #000000;
  color: #ffffff;
  justify-content: center;

  p {
    align-self: center;
    font-family: monospace;
    font-size: 1.5rem;
  }
`

export default function Hero({ height }) {
  const isSSR = typeof window === "undefined"
  const [graphActive, setGraphActive] = useState(false)

  return (
    <Container height={height} onClick={() => setGraphActive(!graphActive)}>
      {!isSSR && (
        <Suspense fallback={<p>Loading...</p>}>
          <Graph graphActive={graphActive} />
        </Suspense>
      )}
    </Container>
  )
}
