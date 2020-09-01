import React from "react"
import { Link } from "gatsby"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="pager">
      {previousPagePath && (
        <div>
          <Link to={`/${previousPagePath}`}>Prev</Link>
        </div>
      )}
      {nextPagePath && (
        <div>
          <Link to={`/${nextPagePath}`}>Next</Link>
        </div>
      )}
    </div>
  )
}

export default Pager
