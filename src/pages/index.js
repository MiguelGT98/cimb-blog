import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blogList/index";

const IndexPage = (query) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BlogList></BlogList>
    </Layout>
  );
}

export default IndexPage
