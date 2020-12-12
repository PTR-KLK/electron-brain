import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Favourites from "../components/favourites"
import Latest from "../components/latest"

const Columns = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

export default function Home({ data }) {
  const {
    site: { siteMetadata },
  } = data

  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Columns>
        <Latest />
        <Favourites />
      </Columns>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
