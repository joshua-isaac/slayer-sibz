import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"
import ArticleCard from "../components/articleCard"
import Pager from "../components/pager"

export const query = graphql`
  query($slug: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      skip: $skip
      limit: $limit
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          categories {
            nodes {
              slug
            }
          }
          date(formatString: "MM . DD . YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 1024
                    maxHeight: 1024
                    quality: 90
                    cropFocus: CENTER
                    fit: COVER
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

const CategoryTemplate = ({ data, pageContext }) => {
  // // const category_slug = data.allWpCategory.edges[0].node.slug
  // console.log(data)
  console.log(pageContext)
  const posts = data.allWpPost.edges

  return (
    <Layout>
      <div className="category__container">
        <div className="main-wrapper">
          <div className="title">
            <div className="line"></div>
            <h5>{pageContext.category}</h5>
            <div className="line"></div>
          </div>
          <Row>
            {posts.map((post, i) => {
              const slug = post.node.slug
              const categorySlug = post.node.categories.nodes[0].slug
              return (
                <Col lg={4} md={6} sm={6} key={i}>
                  <ArticleCard
                    title={post.node.title}
                    image={
                      post.node.featuredImage.node.localFile.childImageSharp
                        .fluid
                    }
                    date={post.node.date}
                    slug={`${slug}`}
                    categorySlug={`${categorySlug}`}
                  />
                </Col>
              )
            })}
          </Row>
          <Pager pageContext={pageContext} />
        </div>
      </div>
    </Layout>
  )
}

export default CategoryTemplate
