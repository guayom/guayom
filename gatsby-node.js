const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      pages: allSanityPage {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.pages.edges.forEach(({ node }) => {
      const template = path.resolve(`src/templates/main.js`)
      createPage({
        path: node.path,
        component: template,
        context: { id: node.id },
      })
    })
  })
}