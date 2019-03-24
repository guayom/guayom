const path = require('path')

async function createRegularPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    {
      pages: allSanityPage {
        edges {
          node {
            id
            pagePath: path
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.pages || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, pagePath } = edge.node
    const template = path.resolve(`src/templates/main.js`)

    reporter.info(`Creating page: ${pagePath}`)
    createPage({ path: pagePath, component: template, context: { id } })
    createPageDependency({ path: pagePath, nodeId: id })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createRegularPages(graphql, actions, reporter)
}
