const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = path.resolve(`src/templates/${node.frontmatter.template}.js`)
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {},
      })
    })
  })
}