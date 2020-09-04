import React from "react"
import InstagramBlock from "../components/instagramBlock"

const Footer = () => {
  var day = new Date()
  var year = day.getFullYear()

  return (
    <>
      <InstagramBlock />
      <footer className="footer">
        <div className="main-wrapper">
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
