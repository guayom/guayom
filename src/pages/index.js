import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { page } = data
  return (
    <Layout>
      <SEO title={page.title} />
      <div>
        <h1>{page.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: page.description }}
        />
        <pre>{JSON.stringify(page.pageBlocks, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    page: sanityPage(path: { eq: "/" }) {
      name
      description
      pageBlocks {
        body {
          children {
            text
          }
        }
      }
    }
  }
`
