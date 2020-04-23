/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Lynn Pronk - Contentful",
    author: "Peter G Koenders",
    year: "2020",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },


    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    "gatsby-plugin-sass",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },

    // {
    //   resolve: "gatsby-plugin-load-script",
    //   options: {
    //     //src: "/sticky-header.js",
    //   },
    // },
  ],
}
