// @flow

const path = require('path')

// TODO type "types" correctly
type Props = {
  +graphql: string => Object,
  +actions: Object,
}

exports.createPages = async ({ graphql, actions }: Props) => {
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
    },
  })
}
