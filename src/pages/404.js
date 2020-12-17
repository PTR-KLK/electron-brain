import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import colors from "../components/colors"

const Info = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  background-color: ${colors.primary};
  color: ${colors.light};
  justify-content: center;

  h2 {
    align-self: center;
    font-family: "Inconsolata", monospace;
  }
`

const Message = styled.h3`
  text-align: center;
  font-family: "Inconsolata", monospace;
  flex: 1;
`
export default function About() {
  return (
    <Layout>
      <Info>
        <h2>404</h2>
      </Info>
      <Message>I don't recall that page.</Message>
    </Layout>
  )
}
