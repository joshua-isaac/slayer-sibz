import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

import LatestLifestyle from "../components/latestLifestyle"
import LatestOutfits from "../components/latestOutfits"
import LatestVintage from "../components/latestVintage"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => {
  const data = useStaticQuery(HOME_QUERY)
  console.log(data)

  return (
    <Layout>
      <section className="home__articles">
        <div className="main-wrapper">
          <Jumbotron featuredPost={data.featuredPost.Home_ACF.featuredPost} />
          <LatestOutfits articles={data.latestOutfits.edges} />
          <LatestVintage articles={data.latestVintage.edges} />
          <LatestLifestyle articles={data.latestLifestyle.edges} />
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const HOME_QUERY = graphql`
  query {
    featuredPost: wpPage(isFrontPage: { eq: true }) {
      Home_ACF {
        __typename
        featuredPost {
          __typename
          ... on WpPost {
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
                      maxWidth: 2048
                      maxHeight: 2048
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
    latestOutfits: allWpPost(
      limit: 2
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "outfits" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          categories {
            nodes {
              slug
            }
          }
          date(formatString: "MM . DD . YYYY")
          slug
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
    latestVintage: allWpPost(
      limit: 2
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "vintage" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          categories {
            nodes {
              slug
            }
          }
          date(formatString: "MM . DD . YYYY")
          slug
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
    latestLifestyle: allWpPost(
      limit: 2
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: "lifestyle" } } } }
      }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          categories {
            nodes {
              slug
            }
          }
          date(formatString: "MM . DD . YYYY")
          slug
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
