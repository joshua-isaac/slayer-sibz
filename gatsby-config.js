require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.slayersibz.com",
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
    // instagram config
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Slayer Sibz`,
        short_name: `Slayer Sibz`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
