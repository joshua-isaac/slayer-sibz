import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from "react-bootstrap"

const RecentPosts = () => {
  const data = useStaticQuery(RECENT_POSTS_QUERY)
  const posts = data.allWpPost.edges
  return (
    <div className="recent__posts-container">
      <h5 className="recent__posts-title">Recent Posts</h5>
      <div className="recent__posts-wrapper">
        {posts.map((post, i) => (
          <div className="recent__post" key={i}>
            <Link
              to={`/${post.node.categories.nodes[0].slug}/${post.node.slug}`}
            >
              <Img
                fluid={
                  post.node.featuredImage.node.localFile.childImageSharp.fluid
                }
              />
            </Link>
          </div>
        ))}
      </div>
      <div class="recent__posts-wrapper-mobile">
        <Row>
          {posts.map((post, i) => (
            <Col md={6} sm={6}>
              <div className="recent__post" key={i}>
                <Link
                  to={`/${post.node.categories.nodes[0].slug}/${post.node.slug}`}
                >
                  <Img
                    fluid={
                      post.node.featuredImage.node.localFile.childImageSharp
                        .fluid
                    }
                  />
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export const RECENT_POSTS_QUERY = graphql`
  query {
    allWpPost(limit: 2, sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          slug
          date
          categories {
            nodes {
              slug
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(
                    cropFocus: CENTER
                    fit: COVER
                    quality: 90
                    maxWidth: 500
                    maxHeight: 500
                  ) {
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

export default RecentPosts
