import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const Navigation = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  background: ${props => props.theme.colors.creme};
  /*border-top: solid 1px ${props => props.theme.colors.brown};*/

  @media (min-width: ${props => props.theme.breakpoints[1]}px){
    display: block;
    border-top: none;
    border-right: solid 1px ${props => props.theme.colors.transparent};
    padding-top: 35px;
  }
`

const Item = styled.li`
  text-align: center;
  height: 100%;
  border-right: 1px solid ${props => props.theme.colors.creme};

  &:last-of-type {
    border-right: none;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}px) {
    height: auto;
    border-right: none;
  }
`

const LinkItem = styled(Link)`
  ${space}
  ${color}
  ${fontSize}

  display: block;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.breakpoints[1]}px){
    border-right: none;
    justify-content: flex-end;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        pages: allSanityPage {
          edges {
            node {
              id
              name
              path
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navigation">
        <Navigation>
          {data.pages.edges.map(page => (
            <Item key={page.node.id}>
              <LinkItem
                fontSize={[1, 2, 4]}
                p={[0, 0, 2]}
                color="orange"
                to={page.node.path}
              >
                {page.node.name}
              </LinkItem>
            </Item>
          ))}
        </Navigation>
      </nav>
    )}
  />
)
