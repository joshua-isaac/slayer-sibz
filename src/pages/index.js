import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cookies from "universal-cookie"

import LatestLifestyle from "../components/latestLifestyle"
import LatestOutfits from "../components/latestOutfits"
import LatestVintage from "../components/latestVintage"
import Jumbotron from "../components/jumbotron"
import SplashScreen from "../components/splashScreen"

const IndexPage = () => {
  // get home page data
  const data = useStaticQuery(HOME_QUERY)

  // // set up new cookies
  // const cookies = new Cookies()

  // // check if we have a visited cookie
  // const cookie = cookies.get("visited")

  // const isSSR = typeof window === "undefined"

  // console.log(isSSR)

  // useEffect(() => {
  //   if (!cookie) {
  //     document.querySelector("body").classList.add("fixed")
  //     document.querySelector("html").classList.add("fixed")
  //     cookies.set("visited")
  //   }
  // }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {/* {cookie || isSSR ? null : <SplashScreen />} */}
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
