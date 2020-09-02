import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/styles/main.scss"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
