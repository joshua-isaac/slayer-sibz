import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(ABOUT_QUERY)
  console.log(data)
  return (
    <Layout>
      <div className="about__container">
        <div className="main-wrapper">
          <div className="about__image">
            <Img
              fluid={
                data.wpPage.featuredImage.node.localFile.childImageSharp.fluid
              }
            />
          </div>
          <div class="about__content">
            <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const ABOUT_QUERY = graphql`
  query {
    wpPage(slug: { eq: "about" }) {
      title
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 3000
                maxHeight: 3000
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
