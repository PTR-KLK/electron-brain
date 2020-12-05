const path = require(`path`)
const slugify = require("slugify")

const createSlug = node => {
  const absolutePathArr = node.fileAbsolutePath.split("/")
  const fileName = absolutePathArr.slice(-1)[0].split(".")[0]

  return `/${slugify(fileName)}`
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)

    createNodeField({
      node,
      name: `slug`,
      value: createSlug(node),
    })

    createNodeField({
      node,
      name: "modifiedTime",
      value: fileNode.mtime,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/brain-page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
