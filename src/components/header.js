import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.png" } ) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      space: file(relativePath: { eq: "space.png" } ) {
        childImageSharp {
          fixed(width: 6, height: 6) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" } ) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return ( <header style={{background: `#333`, marginBottom: `0.45rem`,}}>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0.20rem 0.20 rem`,
              }}
            >
              <table width="100%">
                <tr>
                  <td>
                  <h1 style={{ margin: 0 }}>
                    <Link
                        to="/"
                        style={{
                          color: `white`,
                          textDecoration: `none`,
                        }}
                      >
                        {siteTitle}
                      </Link>
                    </h1>
                  </td>
                  <td valign="bottom" align="right" width="76">
                    <a href="https://github.com/jimareed">
                      <Img title="GitHub" fixed={data.github.childImageSharp.fixed} />
                    </a>
                      <Img fixed={data.space.childImageSharp.fixed} />
                    <a href="https://www.linkedin.com/in/jimareed/">
                      <Img title="LinkedIn" fixed={data.linkedin.childImageSharp.fixed} />
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </header>
          )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
