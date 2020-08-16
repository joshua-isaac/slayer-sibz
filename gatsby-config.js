module.exports = {
  siteMetadata: {
    title: `Slayer Sibz`,
    description: `A custom starter template equipped with common tools and plugins.`,
    author: `@sibelrafailov`,
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
