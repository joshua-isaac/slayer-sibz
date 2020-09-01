import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const data = useStaticQuery(HOME_QUERY)
  console.log(data)
  const featuredPost = data.featuredPost.edges[0]
  const latestVintagePosts = data.lastestVintage.edges
  const latestOutfitsPosts = data.lastestOutfits.edges
  const latestLifestylePosts = data.lastestLifestyle.edges
  return (
    <Layout>
      {" "}
      <section className="home__articles">
        <div className="main-wrapper">
          <div className="featured__article">
            <BackgroundImage
              className="featured__article-image"
              fluid={
                featuredPost.node.featuredImage.node.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
          <div className="lifestyle__articles">
            {latestLifestylePosts.length > 0 ? (
              <>
                <div className="title">
                  <h5>Lifestyle</h5>
                </div>
                <Row>
                  {latestLifestylePosts.map((post, i) => (
                    <Col lg={4}>
                      <p>post</p>
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <p>no posts</p>
            )}
          </div>
          <div className="outfits__articles">
            {latestOutfitsPosts.length > 0 ? (
              <>
                <div className="title">
                  <h5>Outfits</h5>
                </div>
                <Row>
                  {latestOutfitsPosts.map((post, i) => (
                    <Col lg={4}>
                      <p>post</p>
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <p>no posts</p>
            )}
          </div>
          <div className="vitnage__articles">
            {latestVintagePosts.length > 0 ? (
              <>
                <div className="title">
                  <h5>Vintage</h5>
                </div>
                <Row>
                  {latestVintagePosts.map((post, i) => (
                    <Col lg={4}>
                      <p>post</p>
                    </Col>
                  ))}
                </Row>
              </>
            ) : (
              <p>no posts</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const HOME_QUERY = graphql`
  query {
    featuredPost: allWpPost(limit: 1, sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          date(formatString: "MM . DD . YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1000, maxHeight: 500) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          categories {
            nodes {
              slug
            }
          }
          slug
        }
      }
    }
    lastestOutfits: allWpPost(
      limit: 3
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "outfits" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
        }
      }
    }
    lastestVintage: allWpPost(
      limit: 3
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "vintage" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
        }
      }
    }
    lastestLifestyle: allWpPost(
      limit: 3
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "lifestyle" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
        }
      }
    }
  }
`
