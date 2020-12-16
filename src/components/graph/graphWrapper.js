import React, { useState, Suspense } from "react"
import styled from "styled-components"

const Graph = React.lazy(() => import("./graph"))

const Container = styled.div`
  width: 100%;
  display: flex;
  height: ${props => (props.height ? `${props.height}vh` : "50vh")};
  background: #133c55;
  color: #ffffff;
  justify-content: center;

  p {
    align-self: center;
    font-family: "Inconsolata", monospace;
    background-color: #133c55;
  }
`

export default function Hero({ height, data }) {
  const isSSR = typeof window === "undefined"
  const [graphActive, setGraphActive] = useState(false)

  return (
    <Container height={height} onClick={() => setGraphActive(!graphActive)}>
      {!isSSR && (
        <Suspense fallback={<p>Loading...</p>}>
          <Graph graphActive={graphActive} data={data} />
        </Suspense>
      )}
    </Container>
  )
}
