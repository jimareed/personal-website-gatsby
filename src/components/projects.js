import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "projects/block-diagram-editor.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "projects/image2diagram.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return  <div>
            <div className="projects">
              <a href="http://jimareed.com:5000">
                <Img title="Block Diagram Editor" fluid={data.image1.childImageSharp.fluid} />
              </a>
              <br />
              <a href="https://github.com/jimareed/image2diagram">
                <Img title="image2diagram" fluid={data.image2.childImageSharp.fluid} />
              </a>
            </div>
          </div>
}

export default Projects
