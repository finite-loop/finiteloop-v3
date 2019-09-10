require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const tailwind = require("tailwindcss")

// const purgecss = require("@fullhuman/postcss-purgecss")({
//   // Specify the paths to all of the template files in your project
//   content: ["./src/**/*.html", "./src/**/*.jsx"],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
// })

module.exports = {
  siteMetadata: {
    title: `FiniteLoop`,
    description: ``,
    author: `@FiniteLoop`,
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
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FiniteLoop`,
        short_name: `FiniteLoop`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/FL-RedWhite.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          tailwind("./tailwind.config.js"),
          require("autoprefixer"),
          // [purgecss],
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: false,
    //     develop: false,
    //     tailwind: true,
    //     purgeOnly: [`src/styles/tailwind.css`],
    //   },
    // },
    `gatsby-plugin-remove-serviceworker`,
  ],
}
