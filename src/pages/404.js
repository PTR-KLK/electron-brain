import React from "react"
import Layout from "../components/layout/layout"
import styled from "styled-components"
import { sectionContainer } from "../components/theme"

const Info = styled.section`
  width: calc(100% - 2px - 2rem);
  height: 50vh;
  color: ${props => props.theme.text};
  justify-content: center;
  ${({ theme }) => sectionContainer(theme)}

  h2 {
    align-self: center;
  }
`

const Message = styled.h3`
  text-align: center;
  flex: 1;
`
const NotFound = () => {
  return (
    <Layout>
      <Info>
        <h2>404</h2>
      </Info>
      <Message>I don't recall that page.</Message>
    </Layout>
  )
}

export default NotFound
