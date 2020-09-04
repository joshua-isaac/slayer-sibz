import React from "react"
import { Link } from "gatsby"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

const Pager = ({ pageContext }) => {
  // get page context
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="pager">
      {previousPagePath && (
        <div className="prev">
          <Link to={`/${previousPagePath}`}>
            <BsArrowLeft /> Prev
          </Link>
        </div>
      )}
      {nextPagePath && (
        <div className="next">
          <Link to={`/${nextPagePath}`}>
            Next <BsArrowRight />
          </Link>
        </div>
      )}
    </div>
  )
}

export default Pager
