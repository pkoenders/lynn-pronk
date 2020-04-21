import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import MainNav from "./main-nav"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header id="myHeader" className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <MainNav />
    </header>
  )
}

export default Header
