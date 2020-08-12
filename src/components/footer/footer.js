import React from "react"

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <header>
      <div className="main-wrapper">
        <p>
          Copyright © {year} | All Rights Reserved. | Web Design & Development
          by{" "}
          <a
            href="https://www.joshuaisaac.ca"
            target="_blank"
            rel="noreferrer"
            title="Toronto Web Design"
          >
            Joshua Isaac
          </a>
        </p>
      </div>
    </header>
  )
}

export default Footer
