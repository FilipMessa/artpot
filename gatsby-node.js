// @flow

const path = require('path')

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

  console.log(data)

  createPage({
    path: data.markdownRemark.frontmatter.slug,
    component: path.resolve('./src/components/InfoLayout.js'),
    context: {
      id: data.markdownRemark.id,
    },
  })
}
