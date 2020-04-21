import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link, useStaticQuery, graphql } from "gatsby"
import blogStyles from "./blog.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: PublishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            PublishedDate(formatString: "MMMM Do, YYYY")
            imagePreview {
              file {
                url
              }
              title
            }
            addToHomepage
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home" />

      <ol id="myBlogList" className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            edge.node.addToHomepage === true && (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  {/* <p>{edge.node.imagePreview.file.url}</p> */}
                  <img
                    alt={edge.node.imagePreview.title}
                    src={edge.node.imagePreview.file.url}
                  />
                  <h2>{edge.node.title}</h2>

                  {/* <img alt={edge.node.imagePreview.title} src={edge.node.imagePreview.file.url} /> */}
                  {/* <p>{edge.node.PublishedDate}</p> */}
                </Link>
              </li>
            )
          )
        })}
      </ol>

      <h2>Hello.</h2>
      <h3>
        I'm Pete, a designer living in Palmerston North. Choose me $$$$ !!!!
        @@@@
      </h3>
    </Layout>
  )
}

export default IndexPage
