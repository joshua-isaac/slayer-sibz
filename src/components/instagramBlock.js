import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

const InstagramBlock = () => {
  const data = useStaticQuery(INSTAGRAM_QUERY)
  const images = data.allInstaNode.edges
  const baseUrl = `https://www.instagram.com/p`
  return (
    <div className="instagram__block">
      <div className="main-wrapper">
        <div className="title">
          <div className="line"></div>
          <h5>Instagram</h5>
          <div className="line"></div>
        </div>
        <div className="instagram__block-images">
          <Row>
            {images.map((image, i) => (
              <Col lg={3} md={3} key={i}>
                <a
                  href={`${baseUrl}/${image.node.id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Img fluid={image.node.localFile.childImageSharp.fluid} />
                </a>
              </Col>
            ))}
          </Row>
        </div>
        <div class="instagram__block-btn">
          <a
            href="https://www.instagram.com/sibelrafailov/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Follow Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default InstagramBlock

const INSTAGRAM_QUERY = graphql`
  query {
    allInstaNode(limit: 8, sort: { order: DESC, fields: timestamp }) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
