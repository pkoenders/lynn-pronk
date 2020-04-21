import React from "react"
import { Link } from "gatsby"
import "./main-nav-sticky.scss"
import mainNavStyles from "./main-nav.module.scss"

const MainNav = () => {

  return (
    <nav id="myTopnav">
      <ul className={mainNavStyles.navList}>
        {/* <li>
          <Link
            className={mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            to="/"
          >
            Index
          </Link>
        </li> */}
        <li>
          <Link
            className={mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            to="/blog"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            to="/about"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className={mainNavStyles.navItem}
            activeClassName={mainNavStyles.activeNavItem}
            to="/contact"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
