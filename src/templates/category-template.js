import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

export const query = graphql`
  query($slug: String!) {
    wpCategory(slug: { eq: $slug }) {
      name
      posts {
        nodes {
          title
          slug
          date(formatString: "MM . DD . YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const CategoryTemplate = ({ data }) => {
  return (
    <Layout>
      <div class="category__container">
        <div class="main-wrapper">
          <h3 className="category__title">{data.wpCategory.name}</h3>
          <Row>
            {data.wpCategory.posts.nodes.map((post, i) => {
              if (i % 6 === 1) {
                return (
                  <Col lg={4}>
                    <p>{post.title}</p>
                  </Col>
                )
              }
              if (i % 6 === 2) {
                return (
                  <Col lg={4}>
                    <p>{post.title}</p>
                  </Col>
                )
              }
              if (i % 6 === 3) {
                return (
                  <Col lg={4}>
                    <p>{post.title}</p>
                  </Col>
                )
              }
              if (i % 6 === 4) {
                return (
                  <Col lg={4}>
                    <p>{post.title}</p>
                  </Col>
                )
              }
              if (i % 6 === 5) {
                return (
                  <Col lg={4}>
                    <p>{post.title}</p>
                  </Col>
                )
              }
              if (i % 6 === 0) {
                return (
                  <Col lg={4}>
                    <p>{post.title}</p>
                  </Col>
                )
              }
            })}
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default CategoryTemplate
