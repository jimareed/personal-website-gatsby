import React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <p>Here are some of my hobby projects:</p>
    <div>
      <Projects />
    </div>
  </Layout>
)

export default IndexPage

