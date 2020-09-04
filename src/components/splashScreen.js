import React, { useState } from "react"
import { motion } from "framer-motion"

const SplashScreen = () => {
  const [close, setClose] = useState(false)
  return (
    <motion.div
      className="splash__screen-container"
      animate={close ? "closed" : "open"}
    >
      <motion.div
        className="spash__screen"
        variants={{
          closed: {
            display: "none",
            opaicty: 0,
            transition: {
              delay: 0.3,
            },
          },
        }}
      >
        <button
          onClick={() => {
            setClose(true)
            document.querySelector("body").classList.remove("fixed")
            document.querySelector("html").classList.remove("fixed")
          }}
        >
          ENTER
        </button>
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen
