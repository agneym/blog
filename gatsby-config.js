const path = require('path');

module.exports = {
  siteMetadata: {
    title: `The Mindless`,
    description: `A techxploration - Personal blog by Agney`,
    author: `Agney Menon`,
    authorTagline: 'Engineer. Driven by Passion',
    siteUrl: `https://blog.agney.dev`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/templates/blog-post.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: false,
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
      rehypePlugins: [require('@mapbox/rehype-prism')],
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: { published: { ne: false } } }
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    html
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: `Mindless - Agney's Technical Blog RSS Feed`,
            site_url: `https://blog.agney.dev`,
          },
        ],
      },
    },
    'gatsby-plugin-use-dark-mode',
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: 'www.blog.agney.dev',
        identity: {
          github: 'agneym',
          twitter: 'agneymenon',
        },
        mentions: true,
        pingbacks: true,
        domain: 'www.blog.agney.dev',
        token: 'veBNQ5a4xyCTfs4EYDQJUQ',
      },
    },
  ],
};
