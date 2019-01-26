import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../images/guayom-logo.svg'
import { Headline } from '../components/home/home-sections'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <img src={Logo} alt={frontmatter.title} width="150"/>
        <Headline fontSize={[5, 7, 8]}>
          I make high performance webapps
        </Headline>
        <div style={{ color: `#362207`, fontSize: `20px`}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mollis sem, et sollicitudin nisl. Nulla mollis rutrum arcu, non tempus ex mollis ut.
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
