import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const data = useStaticQuery(CONTACT_QUERY)
  return (
    <Layout>
      <div className="contact__container">
        <div class="main-wrapper">
          <div class="contact__content">
            <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
            <div class="contact__socials">
              {data.socials.siteMetadata.instagram && (
                <p>
                  Instagram:{" "}
                  <a
                    href={data.socials.siteMetadata.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.socials.siteMetadata.instagram}
                  </a>
                </p>
              )}
              {data.socials.siteMetadata.twitter && (
                <p>
                  Twitter:{" "}
                  <a
                    href={data.socials.siteMetadata.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.socials.siteMetadata.twitter}
                  </a>
                </p>
              )}
              {data.socials.siteMetadata.pinterest && (
                <p>
                  Pinterest:{" "}
                  <a
                    href={data.socials.siteMetadata.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.socials.siteMetadata.pinterest}
                  </a>
                </p>
              )}
              {data.socials.siteMetadata.tumblr && (
                <p>
                  Tumblr:{" "}
                  <a
                    href={data.socials.siteMetadata.tumblr}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.socials.siteMetadata.tumblr}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const CONTACT_QUERY = graphql`
  query {
    page: wpPage(slug: { eq: "contact" }) {
      content
    }
    socials: site {
      siteMetadata {
        instagram
        pinterest
        title
        tumblr
        twitter
      }
    }
  }
`
