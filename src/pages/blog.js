import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import IndexBGroundImg from '../components/index-bground-img'
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost 
      (
        sort: {
          fields: PublishedDate,
          order: DESC
        }
      )
      
      {
        edges {
          node {
            slug
            title
            PublishedDate (formatString: "MMMM Do, YYYY")
            }
          }
      }
    }
  `)

  //console.log(data);


  return (
    <div>
      <IndexBGroundImg />
      <Layout>
        <Head title="Blog" />
        <h2>Blog</h2>

        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.PublishedDate}</p>
                </Link>
              </li>

            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
