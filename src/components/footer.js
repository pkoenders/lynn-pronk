import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author,
          year
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Footer - Created by {data.site.siteMetadata.author} &copy; {data.site.siteMetadata.year}</p>
    </footer>
  )
}

export default Footer