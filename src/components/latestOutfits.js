import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import ArticleCard from "../components/articleCard"

const LatestOutfits = ({ articles }) => {
  return (
    <div className="latest__articles outfits">
      <div className="article__title">
        <div className="line"></div>
        <h5>Outfits</h5>
        <div className="line"></div>
      </div>
      {articles.length > 0 ? (
        <>
          <Row>
            {articles.map((article, i) => (
              <Col lg={6} md={6} sm={6} key={i}>
                <ArticleCard
                  image={
                    article.node.featuredImage.node.localFile.childImageSharp
                      .fluid
                  }
                  title={article.node.title}
                  date={article.node.date}
                  slug={article.node.slug}
                  categorySlug={article.node.categories.nodes[0].slug}
                />
              </Col>
            ))}
          </Row>
          <div className="category__link">
            <Link to={`/category/outfits`}>
              See All Outfits <BsArrowRight />
            </Link>
          </div>
        </>
      ) : (
        <div className="no__articles">
          <p>Coming Soon...</p>
        </div>
      )}
    </div>
  )
}

export default LatestOutfits
