
module.exports = {
  siteMetadata: {
    title: 'Artpot',
    description: 'Personal art portfolio',
    keywords: 'art, portfolio, artist, paintings',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.

              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',

    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'common',
        path: `${__dirname}/src/images/common`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'works',
        path: `${__dirname}/src/images/works`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pagesContent',
        path: `${__dirname}/src/pages/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Artpot',
        short_name: 'Artpot',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'browser',
        icon: 'src/images/gatsby-icon.png', // TODO change This path is relative to the root of the site.// This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ],
}
