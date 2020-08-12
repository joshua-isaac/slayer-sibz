import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="main-wrapper">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
