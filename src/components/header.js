import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import BarbWire from "../assets/images/barb-wire.svg"
import BarbWireTablet from "../assets/images/barb-wire-tablet.svg"
import BarbWireMobile from "../assets/images/barb-wire-mobile.svg"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const data = useStaticQuery(HEADER_QUERY)
  const menu = data.wpMenu.menuItems.nodes
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <h1>Slayer Sibz</h1>
          </Link>
        </div>
        <nav className="header__menu">
          <ul>
            {menu.map((menu_item, i) => (
              <li key={i}>
                <Link to={menu_item.url} activeClassName="active">
                  {menu_item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__mobile-toggle">
          <FaBars />
        </div>
      </div>
      <img className="header__barb-wire" src={BarbWire} alt="" />
      <img className="header__barb-wire-tablet" src={BarbWireTablet} alt="" />
      <img className="header__barb-wire-mobile" src={BarbWireMobile} alt="" />
    </header>
  )
}

export default Header

export const HEADER_QUERY = graphql`
  query {
    wpMenu(slug: { eq: "main-menu" }) {
      menuItems {
        nodes {
          label
          url
        }
      }
    }
  }
`
