import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import InstagramBlock from "../components/instagramBlock"

const Footer = () => {
  const data = useStaticQuery(FOOTER_QUERY)
  const leftNavItems = data.leftNav.menuItems.nodes
  const rightNavItems = data.rightNav.menuItems.nodes

  var day = new Date()
  var year = day.getFullYear()

  return (
    <>
      <InstagramBlock />
      <footer className="footer">
        <div className="main-wrapper">
          {/* <div className="footer__logo">
            <Link to="/">
              <h1>Slayer Sibz</h1>
            </Link>
          </div>
          <ul>
            {leftNavItems.map((leftNavItem, i) => (
              <li key={i}>
                <Link activeClassName="active" to={leftNavItem.url}>
                  {leftNavItem.label}
                </Link>
              </li>
            ))}
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
          </ul> */}
          <div className="copyright">
            <p>
              © {year} Slayer Sibz | Web Design by{" "}
              <a
                href="https://www.joshuaisaac.ca"
                title="Toronto Web Design"
                target="_blank"
                rel="noreferrer noopener"
              >
                Joshua Isaac
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

export const FOOTER_QUERY = graphql`
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
