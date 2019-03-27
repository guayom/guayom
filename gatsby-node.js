const path = require('path')

async function projectPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    {
      pages: allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.pages || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, slug } = edge.node
    const templatePath = path.resolve(`src/templates/project.js`)
    const pagePath = `/portfolio/${slug.current}/`

    reporter.info(`Creating page: ${pagePath}`)
    createPage({ path: pagePath, component: templatePath, context: { id } })
    createPageDependency({ path: pagePath, nodeId: id })
  })
}

async function postPages(graphql, actions, reporter) {
  const { createPage, createPageDependency } = actions
  const result = await graphql(`
    {
      pages: allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.pages || {}).edges || []

  pageEdges.forEach((edge, index) => {
    const { id, slug } = edge.node
    const templatePath = path.resolve(`src/templates/post.js`)
    const pagePath = `/blog/${slug.current}/`

    reporter.info(`Creating page: ${pagePath}`)
    createPage({ path: pagePath, component: templatePath, context: { id } })
    createPageDependency({ path: pagePath, nodeId: id })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await projectPages(graphql, actions, reporter)
  await postPages(graphql, actions, reporter)
}
