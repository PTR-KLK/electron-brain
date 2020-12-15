import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"

const Info = styled.div`
  width: 100%;
  display: flex;
  height: 50vh;
  background-color: #000000;
  color: #ffffff;
  justify-content: center;

  h2 {
    align-self: center;
    font-size: 3rem;
    font-family: monospace;
  }
`

const Message = styled.p`
  text-align: center;
  font-size: 2rem;
  font-family: monospace;
`
export default function About() {
  return (
    <>
      <Info>
        <h2>404</h2>
      </Info>
      <Layout>
        <Message>I don't recall that page.</Message>
      </Layout>
    </>
  )
}
