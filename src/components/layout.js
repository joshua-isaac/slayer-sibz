/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../assets/styles/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <main>{children}</main>
    </div>
  )
}

export default Layout
