import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

const Jumbotron = ({ featuredPost }) => {
  console.log(featuredPost)
  return (
    <div className="featured__article">
      <Link
        to={`/${featuredPost.categories.nodes[0].slug}/${featuredPost.slug}`}
      >
        <BackgroundImage
          fluid={
            featuredPost.featuredImage.node.localFile.childImageSharp.fluid
          }
          className="featured__article-image"
        >
          <div className="overlay">
            <div className="overlay__content">
              <h3>{featuredPost.title}</h3>
            </div>
          </div>
        </BackgroundImage>
      </Link>
      <div className="featured__article-link">
        <Link
          to={`/${featuredPost.categories.nodes[0].slug}/${featuredPost.slug}`}
        >
          View Post <BsArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default Jumbotron
