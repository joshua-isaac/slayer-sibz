import React from "react"
import BackgroundImage from "gatsby-background-image"

const Jumbotron = ({ featuredPost }) => {
  console.log(featuredPost)
  return (
    <div className="featured__article">
      <BackgroundImage
        fluid={featuredPost.featuredImage.node.localFile.childImageSharp.fluid}
        className="featured__article-image"
      >
        <div className="overlay">
          <div className="overlay__content">
            <h3>{featuredPost.title}</h3>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default Jumbotron
