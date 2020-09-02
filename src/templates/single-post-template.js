import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import RecentPosts from "../components/recentPosts"
import Socials from "../components/socials"
import ShopDepop from "../components/shopDepop"
import InstagramBlock from "../components/instagramBlock"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share"

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      slug
      date(formatString: "MM . DD . YYYY")
      categories {
        nodes {
          slug
        }
      }
      date(formatString: "MM . DD . YYYY")
      featuredImage {
        node {
          mediaItemUrl
          localFile {
            childImageSharp {
              fluid(
                cropFocus: CENTER
                fit: COVER
                quality: 90
                maxWidth: 1000
                maxHeight: 1000
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      Post_ACF {
        gallery {
          localFile {
            childImageSharp {
              fluid(
                cropFocus: CENTER
                fit: COVER
                quality: 90
                maxWidth: 1000
                maxHeight: 1000
              ) {
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
  console.log(FacebookShareButton)
  return (
    <Layout>
      <div className="single__post-container">
        <div className="main-wrapper">
          <Row>
            <Col lg={9} md={9}>
              <div className="title__container">
                <h5 className="title">{post.title}</h5>
                <p className="cat__date">
                  <Link to={`/category/${post.categories.nodes[0].slug}`}>
                    {post.categories.nodes[0].slug}
                  </Link>{" "}
                  // {post.date}
                </p>
              </div>
              <div className="single__post-featured-image">
                <Img
                  fluid={
                    post.featuredImage.node.localFile.childImageSharp.fluid
                  }
                />
              </div>
              {post.Post_ACF.gallery && (
                <div className="single__post-gallery">
                  {post.Post_ACF.gallery.map((image, i) => (
                    <div className="single__post-gallery-image" key={i}>
                      <Img fluid={image.localFile.childImageSharp.fluid} />
                    </div>
                  ))}
                </div>
              )}
              <div className="single__post-content">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              {/* <div className="single__post-share">
                <div className="single__post-share-container">
                  <FacebookShareButton
                    url={`www.slayersibz.com/${post.categories.nodes[0].slug}/${post.slug}`}
                    quote={`${post.title}`}
                    hashtag={`${post.categories.nodes[0].slug}`}
                  >
                    <FacebookIcon size="1.5rem" />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`www.slayersibz.com/${post.categories.nodes[0].slug}/${post.slug}`}
                    title={`${post.title}`}
                  >
                    <TwitterIcon size="1.5rem" />
                  </TwitterShareButton>
                  <PinterestShareButton
                    media={`${post.featuredImage.node.mediaUrl}`}
                    url={`www.slayersibz.com/${post.categories.nodes[0].slug}/${post.slug}`}
                    description={post.title}
                  >
                    <PinterestIcon size="1.5rem" />
                  </PinterestShareButton>
                </div>
                <h5>Share</h5>
              </div> */}
            </Col>
            <Col lg={3} md={3}>
              <div class="single__post-sidebar">
                <Socials />
                <ShopDepop />
                <RecentPosts />
              </div>
            </Col>
          </Row>
          <InstagramBlock />
        </div>
      </div>
    </Layout>
  )
}

export default SinglePostTemplate
