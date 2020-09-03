require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Slayer Sibz`,
    description: `Fashion Blog`,
    author: `@sibelrafailov`,
    twitter: `https://twitter.com/gottalovesibel`,
    instagram: `https://www.instagram.com/sibelrafailov/`,
    facebook: `https://www.facebook.com/`,
    pinterest: `https://www.pinterest.ca/`,
    tumblr: `https://www.tumblr.com/`,
  },
  plugins: [
    // Google Analytics
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "TRACKING-ID",
    //     head: false,
    //     anonymize: true,
    //   },
    // },
    // Instagram Config
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `${process.env.GATSBY_INSTAGRAM_ID}`,
      },
    },
    // WordPress Config
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${process.env.GATSBY_WP_URL}/graphql`,
      },
    },
    // Google Fonts
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins:800", "Montserrat:400,600"],
        },
      },
    },
    // SEO Component
    `gatsby-plugin-react-helmet`,
    // SASS
    `gatsby-plugin-sass`,
    // Local Images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // Gatsby Image Helpers
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PWA Support
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: ``, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
