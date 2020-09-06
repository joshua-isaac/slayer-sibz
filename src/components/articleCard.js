import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticleCard = ({ image, slug, categorySlug, title, date }) => {
  return (
    <article className="article__card">
      <Link to={`/${categorySlug}/${slug}`}>
        <Img fluid={image} />
        <div className="article__content">
          <span>{date}</span>
          <h6>{title}</h6>
        </div>
      </Link>
    </article>
  )
}

export default ArticleCard
