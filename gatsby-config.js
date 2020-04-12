module.exports = {
  siteMetadata: {
    title: 'Petra Messa',
    description: 'Petra Messa art portfolio',
    keywords: 'art, portfolio, artist, paintings, messa, Petra Messa, Messa',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
            options: {
              analyzerMode: `server`,
              analyzerPort: `8888`,
            },
          },
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
        name: 'pagesContent',
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'settings',
        path: `${__dirname}/src/content/settings`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Petra Messa - Portfolio',
        short_name: 'Petra Messa - Portfolio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$/,
        exclude: /(node_modules|cache|public|.now|.circleci|coverage)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
}
