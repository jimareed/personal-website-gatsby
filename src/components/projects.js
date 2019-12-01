import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      blank: file(relativePath: { eq: "blank.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      image3: file(relativePath: { eq: "projects/chordpro-editor.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "projects/helm-chart-tutorial.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "projects/qlik-mashup.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image6: file(relativePath: { eq: "projects/docker-deployer.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image7: file(relativePath: { eq: "projects/postman-api-systest.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image8: file(relativePath: { eq: "projects/docker-meetup.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image9: file(relativePath: { eq: "projects/metrics-tutorial.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image10: file(relativePath: { eq: "projects/slack-if-site-down.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image11: file(relativePath: { eq: "projects/chordpro-parser.png" } ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return  <div>
            <table>
              <tr>
                <td width="320px">
                  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <a href="http://jimareed.com:5000">
                      <Img title="Block Diagram Editor" fluid={data.image1.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/helm-chart-tutorial">
                      <Img title="Helm Chart Tutorial" fluid={data.image4.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/postman-api-systest">
                      <Img title="Postman API Systest" fluid={data.image7.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/slack-if-site-down">
                      <Img title="Slack If Site Down" fluid={data.image10.childImageSharp.fluid} />
                    </a>
                  </div>
                </td>                
                <td width="320px">
                  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <a href="https://github.com/jimareed/image2diagram">
                      <Img title="image2diagram" fluid={data.image2.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/qlik-mashup">
                      <Img title="Qlik Mashup" fluid={data.image5.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/docker-meetup-20190226">
                      <Img title="Docker Meetup - Feb 2019" fluid={data.image8.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/chordpro-parser">
                      <Img title="Chordpro Parser" fluid={data.image11.childImageSharp.fluid} />
                    </a>
                    <br />
                  </div>
                </td>                
                <td width="320px">
                  <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <a href="https://github.com/jimareed/chordpro-editor">
                      <Img title="Chordpro Editor" fluid={data.image3.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/metrics-tutorial">
                      <Img title="Metrics Tutorial" fluid={data.image9.childImageSharp.fluid} />
                    </a>
                    <br />
                    <a href="https://github.com/jimareed/docker-deployer">
                      <Img title="Docker Deployer" fluid={data.image6.childImageSharp.fluid} />
                    </a>
                    <br />
                      <Img fluid={data.blank.childImageSharp.fluid} />
                  </div>
                </td>                
              </tr>
            </table>
          </div>
}

export default Projects
