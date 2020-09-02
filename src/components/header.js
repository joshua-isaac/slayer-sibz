import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const data = useStaticQuery(HEADER_QUERY)
  const leftNavItems = data.leftNav.menuItems.nodes
  const rightNavItems = data.rightNav.menuItems.nodes

  typeof window !== "undefined" &&
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY
      const header = document.getElementById("header")
      if (scroll >= 100) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    })

  return (
    <header className="header" id="header">
      <div className="main-wrapper">
        <div className="header__container">
          <nav className="header__nav-left">
            <ul>
              {leftNavItems.map((leftNavItem, i) => (
                <li key={i}>
                  <Link activeClassName="active" to={leftNavItem.url}>
                    {leftNavItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__logo">
            <Link to="/">
              <h1>Slayer Sibz</h1>
            </Link>
          </div>
          <nav className="header__nav-right">
            <ul>
              {rightNavItems.map((rightNavItem, i) => (
                <li key={i}>
                  {rightNavItem.target ? (
                    <a href={rightNavItem.url} target={rightNavItem.target}>
                      {rightNavItem.label}
                    </a>
                  ) : (
                    <Link to={rightNavItem.url} activeClassName="active">
                      {rightNavItem.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__mobile-toggle">
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

export const HEADER_QUERY = graphql`
  query {
    leftNav: wpMenu(slug: { eq: "left-nav" }) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
    rightNav: wpMenu(slug: { eq: "right-nav" }) {
      menuItems {
        nodes {
          target
          label
          url
        }
      }
    }
  }
`
