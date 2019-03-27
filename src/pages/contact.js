import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/contact/form'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { page } = data
  return (
    <Layout>
      <SEO title={page.name} />
      <div>
        <h1>{page.name}</h1>
        <Form />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContactPageQuery {
    page: sanityPage(path: { eq: "/contact/" }) {
      name
      description
    }
  }
`
