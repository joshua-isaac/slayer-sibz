import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebookF, FaTwitter, FaPinterestP, FaTumblr } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { BsArrowDown } from "react-icons/bs"

const Socials = () => {
  const data = useStaticQuery(SOCIALS_QUERY)

  return (
    <>
      <p className="mobile__social-title">
        Let's Connect <BsArrowDown />
      </p>
      <div className="socials__container">
        <p className="title">
          Let's Connect <BsArrowDown />
        </p>
        {data.site.siteMetadata.instagram && (
          <a className="instagram" href={data.site.siteMetadata.instagram}>
            <GrInstagram /> <span>Instagram</span>
          </a>
        )}
        {data.site.siteMetadata.twitter && (
          <a className="twitter" href={data.site.siteMetadata.twitter}>
            <FaTwitter /> <span>Twitter</span>
          </a>
        )}
        {data.site.siteMetadata.pinterest && (
          <a className="pinterest" href={data.site.siteMetadata.pinterest}>
            <FaPinterestP /> <span>Pinterest</span>
          </a>
        )}
        {data.site.siteMetadata.tumblr && (
          <a className="tumblr" href={data.site.siteMetadata.tumblr}>
            <FaTumblr /> <span>Tumblr</span>
          </a>
        )}
      </div>
    </>
  )
}

const SOCIALS_QUERY = graphql`
  query {
    site {
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

export default Socials
