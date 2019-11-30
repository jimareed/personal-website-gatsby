import React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects"
import SEO from "../components/seo"


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <p>Here are some hobby projects I've worked on:</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Projects />
    </div>
  </Layout>
)

export default IndexPage

