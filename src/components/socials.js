import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebookF, FaTwitter, FaPinterestP, FaTumblr } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

const Socials = () => {
  const data = useStaticQuery(SOCIALS_QUERY)
  console.log(data)
  return (
    <div className="socials__container">
      <h5 className="socials__title">Socialize</h5>
      <ul className="socials__list">
        <li>
          <a
            href={data.site.siteMetadata.instagram}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GrInstagram />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.facebook}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.twitter}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.pinterest}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaPinterestP />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.tumblr}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTumblr />
          </a>
        </li>
      </ul>
    </div>
  )
}

const SOCIALS_QUERY = graphql`
  query {
    site {
      siteMetadata {
        facebook
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
