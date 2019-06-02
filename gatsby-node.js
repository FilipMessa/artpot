// @flow
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, 'src/theme/'),
        '@components': path.resolve(__dirname, 'src/components/'),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      markdownRemark(frontmatter: { slug: { eq: "/info" } }) {
        id
        frontmatter {
          slug
        }
      }
    }
  `)

  createPage({
    path: data.markdownRemark.frontmatter.slug,
    component: path.resolve('./src/templates/InfoPage.js'),
    context: {
      id: data.markdownRemark.id,
      slug: data.markdownRemark.frontmatter.slug,
    },
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
