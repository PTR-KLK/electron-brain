import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { shadow } from "../components/theme"

const Info = styled.div`
  width: calc(100% - 4px - 2rem);
  display: flex;
  height: 50vh;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  box-shadow: ${props => shadow(props.theme.secondary)};
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
