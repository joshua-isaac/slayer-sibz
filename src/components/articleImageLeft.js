import React from "react"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ArticleImageLeft = ({
  title,
  slug,
  content,
  image,
  date,
  excerpt,
  category,
}) => {
  return (
    <article className="article__image-left">
      <Row>
        <Col lg={6}>
          <Link to={`${category.slug}/${slug}`}>
            <Img fluid={image} />
          </Link>
        </Col>
        <Col lg={6}>
          <div className="article__content">
            <h3 className="article__title">
              <Link to={slug}>{title}</Link>
            </h3>
            <p className="article__date-cat">
              {date} —{" "}
              <Link to={`category/${category.slug}`}>{category.name}</Link>
            </p>
            <div className="article__divider"></div>
            <div className="article__excerpt">
              <p>{excerpt}</p>
            </div>
            <div className="article__link">
              <Link to={`${category.slug}/${slug}`}>Read More</Link>
            </div>
          </div>
        </Col>
      </Row>
    </article>
  )
}

export default ArticleImageLeft
