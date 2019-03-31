const path = require('path');

module.exports = {
  siteMetadata: {
    title: `The Mindless`,
    description: `A techxploration.`,
    author: `Boy with Silver Wings`,
    authorTagline: 'Engineer. Driven by Passion',
    social: {
      twitter: `agneymenon`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/templates/blog-post.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-86549623-3`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mindless`,
        short_name: `Mindless`,
        start_url: `/`,
        background_color: `#CA3C25`,
        theme_color: `#CA3C25`,
        display: `minimal-ui`,
        gcm_sender_id: '482941778795',
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
