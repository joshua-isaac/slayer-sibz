import React from "react"
import { Link } from "gatsby"
import { BsArrowRight, BsArrowLeft } from "react-icons/bs"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="pager">
      {/* {nextPagePath ? (
        <div class="pager__w-next">
          <div>
            <Link to={`/${previousPagePath}`}>
              <BsArrowLeft /> Prev
            </Link>
          </div>
          <div>
            <Link to={`/${nextPagePath}`}>
              Next <BsArrowRight />
            </Link>
          </div>
        </div>
      ) : (
        <div class="pager__wo-next">
          <div>
            <Link to={`/${previousPagePath}`}>
              <BsArrowLeft /> Prev
            </Link>
          </div>
        </div>
      )} */}

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
