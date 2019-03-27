import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { page, projects } = data
  const sortedProjects = projects.edges.map(p => p.node)
  return <Layout>
      <SEO title={page.title} />
      <div>
        <h1>{page.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: page.description }} />
        <ul>
          {sortedProjects.map(project => <li>
              <a href={`/portfolio/${project.slug.current}/`}>{project.title}</a>
            </li>)}
        </ul>
        <pre>{JSON.stringify(sortedProjects, null, 2)}</pre>
      </div>
    </Layout>
}

export const pageQuery = graphql`
  query PortfolioPageQuery {
    page: sanityPage(path: { eq: "/portfolio/" }) {
      name
      description
    }
    projects: allSanityProject {
      edges {
        node {
          id
          title
          excerpt
          slug {
            current
          }
        }
      }
    }
  }
`
