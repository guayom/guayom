import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query FindMeQuery {
        profiles: allSanityProfile {
          edges {
            node {
              network
              link
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        <h3>Find me at</h3>
        {data.profiles.edges.map(({ node: { link, network } }) => (
          <a href={link} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
            {network}
          </a>
        ))}
      </section>
    )}
  />
)
