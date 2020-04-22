import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

import BackgroundImage from 'gatsby-background-image'
import layoutStyles from "./layout.module.scss"

const Layout = props => (
  <StaticQuery
    query={graphql`
      query {
        bgroundImg: file(relativePath: { eq: "img/lynn-bw-photo.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.bgroundImg.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={layoutStyles.staticBgroundImge}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >

          <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
              <main>
                {props.children}
              </main>
            </div>
            <Footer />
          </div>

        </BackgroundImage>
      )
    }}
  />
)

export default Layout
