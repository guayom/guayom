import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
} from 'react-icons/fa'

const Icons = {
  Facebook: <FaFacebook />,
  Github: <FaGithub />,
  Linkedin: <FaLinkedin />,
  Instagram: <FaInstagram />,
  CodePen: <FaCodepen />,
}

export default () => (
  <StaticQuery
    query={graphql`
      query FindMeQuery {
        profiles: allSanityProfile(sort: { fields: [order], order: ASC }) {
          edges {
            node {
              id
              network
              link
            }
          }
        }
      }
    `}
    render={data => (
      <section>
        {data.profiles.edges.map(({ node: { link, network, id } }) => (
          <a
            key={id}
            href={link}
            style={{ display: 'inline-block' }}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: `16px`,
              marginLeft: `10px`,
            }}
          >
            {Icons[network]}
          </a>
        ))}
      </section>
    )}
  />
)
