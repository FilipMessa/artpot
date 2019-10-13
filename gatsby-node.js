// @flow
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// issue React-Hot-Loader: react-🔥-dom patch is not detected.
// Expect that it will be fixed in a new gatsby relaese
// @hot-loader/react-dom
// https://github.com/gatsbyjs/gatsby/issues/11934#issuecomment-538662592
const fixHotLoaderIssue = stage => {
  if (stage.startsWith('develop')) {
    return { 'react-dom': '@hot-loader/react-dom' }
  }
  return {}
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, 'src/theme/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        ...fixHotLoaderIssue(stage),
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
