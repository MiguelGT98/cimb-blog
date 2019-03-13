import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby";

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (query) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
      {query.data.allSitePage.edges.map(node => {
        return <div><Link to={node.node.path}>{node.node.jsonName}</Link></div>
      })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          context {
            id
          }
          path
          jsonName
        }
      }
    }
  }
`
export default IndexPage
