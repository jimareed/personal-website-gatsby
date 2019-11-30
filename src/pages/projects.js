import React from "react"
import Link from 'gatsby-link'

import { graphql } from "gatsby"

const ProjectsPage = ({ data }) => (
    <div>
      <h1>Projects</h1>
      {data.allMarkdownRemark.edges.map(project => (
        <div key={project.node.id}>
          <h3>{project.node.frontmatter.title}</h3>
          <small>
            Details
          </small>
          <br />
          <br />
          {project.node.excerpt}
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  )

export const pageQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
          excerpt
        }
      }
    }
  }
`

export default ProjectsPage