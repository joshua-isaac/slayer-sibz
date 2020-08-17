import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import ArticleImageLeft from "../components/articleImageLeft"
import ArticleImageRight from "../components/articleImageRight"

const IndexPage = () => {
  const data = useStaticQuery(HOME_QUERY)
  const posts = data.allWpPost.edges
  console.log(posts)
  return (
    <Layout>
      <section className="home__articles">
        <div className="main-wrapper">
          {posts.map((post, i) => (
            <div className="article__wrapper" key={i}>
              {i % 2 === 0 ? (
                <ArticleImageLeft
                  title={post.node.title}
                  slug={post.node.slug}
                  content={post.node.content}
                  date={post.node.date}
                  excerpt={post.node.Post_ACF.excerpt}
                  image={
                    post.node.featuredImage.node.localFile.childImageSharp.fluid
                  }
                  category={post.node.categories.nodes[0]}
                />
              ) : (
                <ArticleImageRight
                  title={post.node.title}
                  slug={post.node.slug}
                  content={post.node.content}
                  date={post.node.date}
                  excerpt={post.node.Post_ACF.excerpt}
                  image={
                    post.node.featuredImage.node.localFile.childImageSharp.fluid
                  }
                  category={post.node.categories.nodes[0]}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const HOME_QUERY = graphql`
  query {
    allWpPost(
      sort: { fields: date, order: DESC }
      filter: { status: { eq: "publish" } }
    ) {
      edges {
        node {
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
          date(formatString: "MM . DD . YYYY")
          content
          title
          slug
          categories {
            nodes {
              slug
              name
            }
          }
          Post_ACF {
            excerpt
          }
        }
      }
    }
  }
`
