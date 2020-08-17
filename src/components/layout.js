/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/styles/main.scss"
import Header from "../components/header"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
