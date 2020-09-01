import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import RecentPosts from "../components/recentPosts"
import Socials from "../components/socials"

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      date(formatString: "MM . DD . YYYY")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(cropFocus: CENTER, fit: COVER, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const SinglePostTemplate = ({ data }) => {
  console.log(data)
  const post = data.wpPost
  return (
    <Layout>
      <div className="single__post-container">
        <div className="main-wrapper">
          <h3 className="single__post-title">{post.title}</h3>
          <Row>
            <Col lg={9}>
              <div className="single__post-featured-image">
                <Img
                  fluid={
                    post.featuredImage.node.localFile.childImageSharp.fluid
                  }
                />
              </div>
            </Col>
            <Col lg={3}>
              <RecentPosts />
              <Socials />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default SinglePostTemplate
