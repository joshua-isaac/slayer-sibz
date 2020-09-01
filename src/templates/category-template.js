import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"
import Pager from "../components/pager"

export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      skip: $skip
      limit: $limit
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
    ) {
      edges {
        node {
          title
          slug
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
    }
  }
`

const CategoryTemplate = ({ data, pageContext }) => {
  // const category_slug = data.allWpCategory.edges[0].node.slug
  console.log(data)
  console.log(pageContext)
  const posts = data.allWpPost.edges
  return (
    <Layout>
      <div className="category__container">
        <div className="main-wrapper">
          <p className="category__title">// {pageContext.category}</p>
          <Row>
            {posts.map((post, i) => {
              if (i % 6 === 0) {
                return (
                  <Col
                    lg={4}
                    md={4}
                    key={i}
                    className="category__block-1-container"
                  >
                    <div className="category__block-1">
                      <Link to={`/${pageContext.slug}/${post.node.slug}`}>
                        <BackgroundImage
                          className="category__block-1-image"
                          fluid={
                            post.node.featuredImage.node.localFile
                              .childImageSharp.fluid
                          }
                        >
                          <div className="category__block-overlay">
                            <h5 className="category__block-overlay-title">
                              {post.title}
                            </h5>
                            <p className="category__block-overlay-date">
                              {post.date}
                            </p>
                          </div>
                        </BackgroundImage>
                      </Link>
                    </div>
                  </Col>
                )
              }
              if (i % 6 === 1) {
                return (
                  <Col
                    lg={4}
                    md={4}
                    key={i}
                    className="category__block-2-container"
                  >
                    <div className="category__block-2">
                      <Link to={`/${pageContext.slug}/${post.node.slug}`}>
                        <BackgroundImage
                          className="category__block-2-image"
                          fluid={
                            post.node.featuredImage.node.localFile
                              .childImageSharp.fluid
                          }
                        >
                          <div className="category__block-overlay">
                            <h5 className="category__block-overlay-title">
                              {post.title}
                            </h5>
                            <p className="category__block-overlay-date">
                              {post.date}
                            </p>
                          </div>
                        </BackgroundImage>
                      </Link>
                    </div>
                  </Col>
                )
              }
              if (i % 6 === 2) {
                return (
                  <Col
                    lg={4}
                    md={4}
                    key={i}
                    className="category__block-3-container"
                  >
                    <div className="category__block-3">
                      <Link to={`/${pageContext.slug}/${post.node.slug}`}>
                        <BackgroundImage
                          className="category__block-3-image"
                          fluid={
                            post.node.featuredImage.node.localFile
                              .childImageSharp.fluid
                          }
                        >
                          <div className="category__block-overlay">
                            <h5 className="category__block-overlay-title">
                              {post.title}
                            </h5>
                            <p className="category__block-overlay-date">
                              {post.date}
                            </p>
                          </div>
                        </BackgroundImage>
                      </Link>
                    </div>
                  </Col>
                )
              }
              if (i % 6 === 3) {
                return (
                  <Col
                    lg={4}
                    md={4}
                    key={i}
                    className="category__block-4-container"
                  >
                    <div className="category__block-4">
                      <Link to={`/${pageContext.slug}/${post.node.slug}`}>
                        <BackgroundImage
                          className="category__block-4-image"
                          fluid={
                            post.node.featuredImage.node.localFile
                              .childImageSharp.fluid
                          }
                        >
                          <div className="category__block-overlay">
                            <h5 className="category__block-overlay-title">
                              {post.title}
                            </h5>
                            <p className="category__block-overlay-date">
                              {post.date}
                            </p>
                          </div>
                        </BackgroundImage>
                      </Link>
                    </div>
                  </Col>
                )
              }
              if (i % 6 === 4) {
                return (
                  <Col
                    lg={4}
                    md={4}
                    key={i}
                    className="category__block-5-container"
                  >
                    <div className="category__block-5">
                      <Link to={`/${pageContext.slug}/${post.node.slug}`}>
                        <BackgroundImage
                          className="category__block-5-image"
                          fluid={
                            post.node.featuredImage.node.localFile
                              .childImageSharp.fluid
                          }
                        >
                          <div className="category__block-overlay">
                            <h5 className="category__block-overlay-title">
                              {post.title}
                            </h5>
                            <p className="category__block-overlay-date">
                              {post.date}
                            </p>
                          </div>
                        </BackgroundImage>
                      </Link>
                    </div>
                  </Col>
                )
              }
              if (i % 6 === 5) {
                return (
                  <Col
                    lg={4}
                    md={4}
                    key={i}
                    className="category__block-6-container"
                  >
                    <div className="category__block-6">
                      <Link to={`/${pageContext.slug}/${post.node.slug}`}>
                        <BackgroundImage
                          className="category__block-6-image"
                          fluid={
                            post.node.featuredImage.node.localFile
                              .childImageSharp.fluid
                          }
                        >
                          <div className="category__block-overlay">
                            <h5 className="category__block-overlay-title">
                              {post.title}
                            </h5>
                            <p className="category__block-overlay-date">
                              {post.date}
                            </p>
                          </div>
                        </BackgroundImage>
                      </Link>
                    </div>
                  </Col>
                )
              }
            })}
          </Row>
          <Pager pageContext={pageContext} />
        </div>
      </div>
    </Layout>
  )
}

export default CategoryTemplate
