import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ErrorPage = (query) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <p>La página que buscaste no existe. Por favor corrobora el enlace. </p>
      </div>
    </Layout>
  );
}

export default ErrorPage
