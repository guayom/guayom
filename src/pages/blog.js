import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { page, posts } = data
  const sortedPosts = posts.edges.map(p => p.node)
  return <Layout>
      <SEO title={page.title} />
      <div>
        <h1>{page.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: page.description }} />
        <ul>
          {sortedPosts.map(post => <li>
              <a href={`/blog/${post.slug.current}/`}>
                {post.title}
              </a>
            </li>)}
        </ul>
        <pre>{JSON.stringify(sortedPosts, null, 2)}</pre>
      </div>
    </Layout>
}

export const pageQuery = graphql`
  query BlogPageQuery {
    page: sanityPage(path: { eq: "/blog/" }) {
      name
      description
    }
    posts: allSanityPost {
      edges {
        node {
          title
          publishedAt
          categories {
            title
          }
          slug {
            current
          }
        }
      }
    }
  }
`
