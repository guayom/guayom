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
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPageQuery($id: String!) {
    page: sanityPost(id: { eq: $id }) {
      title
      publishedAt
      categories {
        title
      }
      mainImage {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      body {
        children {
          text
        }
      }
    }
  }
`
