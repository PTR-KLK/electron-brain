import React, { useState, Suspense } from "react"
import styled from "styled-components"
import colors from "../colors"
import shadow from "../shadow"
import { hover } from "../animations"

const Graph = React.lazy(() => import("./graph"))

const Container = styled.div`
  width: 100%;
  display: flex;
  height: ${props => (props.height ? `${props.height}vh` : "50vh")};
  background: ${colors.primary};
  color: ${colors.light};
  justify-content: center;
  box-shadow: ${shadow};

  p {
    align-self: center;
    font-family: "Inconsolata", monospace;
    background-color: ${colors.primary};
  }

  canvas:focus,
  .vis-network:focus {
    outline: none;
  }

  &:hover {
    animation: ${hover} 125ms linear forwards;
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
