module.exports = {
  siteMetadata: {
<<<<<<< HEAD
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
=======
    title: `asdf`,
    description: `asdf`,
    author: `asdf`,
>>>>>>> b1698d125a9b44921f969ccdc5f4178f684835b5
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
<<<<<<< HEAD
        name: `gatsby-starter-default`,
        short_name: `starter`,
=======
        name: `asdf`,
        short_name: `asdf`,
>>>>>>> b1698d125a9b44921f969ccdc5f4178f684835b5
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
<<<<<<< HEAD
=======
    `gatsby-plugin-sass`,
>>>>>>> b1698d125a9b44921f969ccdc5f4178f684835b5
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
