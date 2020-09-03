import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { motion, useCycle } from "framer-motion"
import { FaBars } from "react-icons/fa"

const Header = () => {
  // get data for header
  const data = useStaticQuery(HEADER_QUERY)

  // menus
  const leftNavItems = data.leftNav.menuItems.nodes
  const rightNavItems = data.rightNav.menuItems.nodes

  // set up menu state cycle
  const [open, setOpen] = useCycle(false, true)

  // check for window object
  typeof window !== "undefined" &&
    // function for sticky header
    window.addEventListener("scroll", function (event) {
      var scroll = this.scrollY
      const header = document.getElementById("header")
      if (scroll >= 50) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    })

  // TODO: make function that checks browser width and close mobile menu on large devices

  return (
    <>
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
              <Link
                to="/"
                onClick={() => {
                  document.querySelector("body").classList.remove("fixed")
                  document.querySelector("html").classList.remove("fixed")

                  // if menu isnt open, return nothing, else close menu
                  if (open === false) {
                    return null
                  } else {
                    setOpen(false)
                  }
                }}
              >
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
            <motion.div
              animate={open ? "open" : "closed"}
              className="header__mobile-toggle"
            >
              <motion.button
                onClick={() => {
                  setOpen()
                  document.querySelector("body").classList.toggle("fixed")
                  document.querySelector("html").classList.toggle("fixed")
                }}
              >
                <motion.span
                  className="menu-bar"
                  variants={{
                    closed: {
                      rotate: 0,
                      y: 0,
                      transition: {
                        delay: 0.1,
                      },
                    },
                    open: {
                      rotate: -45,
                      y: 7,
                      transition: {
                        delay: 0.1,
                      },
                    },
                  }}
                ></motion.span>
                <motion.span
                  className="menu-bar"
                  variants={{
                    closed: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.1,
                        duration: 0.3,
                      },
                    },
                    open: {
                      opacity: 0,
                      x: 100,
                      transition: {
                        duration: 0.3,
                        delay: 0.1,
                      },
                    },
                  }}
                ></motion.span>
                <motion.span
                  className="menu-bar"
                  variants={{
                    closed: {
                      rotate: 0,
                      y: 0,
                      transition: {
                        delay: 0.01,
                      },
                    },
                    open: {
                      rotate: 45,
                      y: -9,
                      transition: {
                        delay: 0.01,
                      },
                    },
                  }}
                ></motion.span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mobile__menu"
          animate={open ? "open" : "closed"}
          variants={{
            closed: {
              left: "100%",
              transition: {
                delay: 0.3,
                duration: 0.6,
              },
            },
            open: {
              left: "0",
              transition: {
                delay: 0.3,
                duration: 0.3,
              },
            },
          }}
        >
          <motion.ul
            variants={{
              open: {
                transition: { delayChildren: 0.3, staggerChildren: 0.3 },
              },
            }}
          >
            {leftNavItems.map((leftNavItem, i) => (
              <motion.li
                key={i}
                variants={{
                  closed: {
                    x: 100,
                    opacity: 0,
                    transition: { delay: 0.3, duration: 0.3 },
                  },
                  open: {
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.8 },
                  },
                }}
              >
                <Link
                  activeClassName="active"
                  to={leftNavItem.url}
                  onClick={() => {
                    document.querySelector("body").classList.remove("fixed")
                    document.querySelector("html").classList.remove("fixed")
                    setOpen(false)
                  }}
                >
                  {leftNavItem.label}
                </Link>
              </motion.li>
            ))}
            {rightNavItems.map((rightNavItem, i) => (
              <motion.li
                key={i}
                variants={{
                  closed: {
                    x: 100,
                    opacity: 0,
                    transition: { delay: 0.3, duration: 0.3 },
                  },
                  open: {
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.8 },
                  },
                }}
              >
                {rightNavItem.target ? (
                  <a href={rightNavItem.url} target={rightNavItem.target}>
                    {rightNavItem.label}
                  </a>
                ) : (
                  <Link
                    to={rightNavItem.url}
                    activeClassName="active"
                    onClick={() => {
                      document.querySelector("body").classList.remove("fixed")
                      document.querySelector("html").classList.remove("fixed")
                      setOpen(false)
                    }}
                  >
                    {rightNavItem.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </header>
    </>
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
