import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="splash-screen">
      <a
        href="https://www.instagram.com/sibelrafailov/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Logo} alt="Slayer Sibz" />
      </a>
    </div>
  </Layout>
)

export default IndexPage
