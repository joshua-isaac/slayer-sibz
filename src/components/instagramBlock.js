import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import { BsArrowRight } from "react-icons/bs"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const InstagramBlock = () => {
  const data = useStaticQuery(INSTAGRAM_QUERY)
  const images = data.allInstaNode.edges
  const baseUrl = `https://www.instagram.com/p`
  const settings = {
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  }
  return (
    <div className="instagram__block">
      <div className="main-wrapper">
        <div className="title">
          <div className="line"></div>
          <h5>Instagram</h5>
          <div className="line"></div>
        </div>
        <p className="handle">
          <a
            href="https://www.instagram.com/sibelrafailov/"
            target="_blank"
            rel="noreferrer noopener"
          >
            @sibelrafailov
          </a>
        </p>
      </div>
      <div className="instagram__block-images">
        <div className="main-wrapper">
          <Slider {...settings} className="slider">
            {images.map((image, i) => (
              <a
                href={`${baseUrl}/${image.node.id}`}
                target="_blank"
                rel="noreferrer noopener"
                key={i}
                aria-label="Instagram Image"
              >
                <Img fluid={image.node.localFile.childImageSharp.fluid} />
              </a>
            ))}
          </Slider>
          <div className="instagram__block-btn">
            <a
              href="https://www.instagram.com/sibelrafailov/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Follow Me
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramBlock

const INSTAGRAM_QUERY = graphql`
  query {
    allInstaNode(limit: 8, sort: { order: DESC, fields: timestamp }) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 800
                maxHeight: 800
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
`
