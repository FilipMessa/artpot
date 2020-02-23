
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data: info } = await graphql(`
    query InfoPage{
      markdownRemark(frontmatter: { slug: { eq: "/info" } }) {
        id
        frontmatter {
          slug
        }
      }
    }
  `)

  createPage({
    path: info.markdownRemark.frontmatter.slug,
    component: path.resolve('./src/templates/infoPage.js'),
    context: {
      id: info.markdownRemark.id,
      slug: info.markdownRemark.frontmatter.slug,
    },
  })


    const { data: works } = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "work" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

   const { edges } = works.allMarkdownRemark
   
   edges.forEach(({ node }) => {
     createPage({
       path: `works/${node.frontmatter.title.toLowerCase().replace(/ /g,"_")}`,
       component: path.resolve('./src/templates/workPage.js'),
       context: {
          id: node.id,
        }
      })
    })
}


