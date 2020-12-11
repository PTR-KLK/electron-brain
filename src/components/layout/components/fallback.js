import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: absolute;
  font-family: monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 50vh;
  color: #ffffff;
  background: #000000;
`

export default function Fallback() {
  return <Container>Loading...</Container>
}
