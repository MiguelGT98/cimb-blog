import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (query) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  );
}

export default IndexPage
