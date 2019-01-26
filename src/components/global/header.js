import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { space, fontSize, color } from 'styled-system'

const Navigation =styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
  background: ${props => props.theme.colors.orange};
  /*border-top: solid 1px ${props => props.theme.colors.brown};*/

  @media (min-width: ${props => props.theme.breakpoints[1]}px){
    display: block;
    border-top: none;
    border-right: solid 1px ${props => props.theme.colors.orange};
  }
`

const Item = styled.li`
  text-align: center;
  height: 100%;
  border-right: 1px solid ${props => props.theme.colors.creme};

  &:last-of-type {
    border-right: none;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}px){
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

const Links = [
  {id: "home", url: "/", text: "Home"},
  {id: "portfolio", url: "/portfolio/", text: "Portfolio"},
  {id: "cv", url: "/cv/", text: "CV"},
  {id: "contact", url: "/contact/", text: "Contact"},
]

const Header = () => (
  <nav className="navigation">
    <Navigation>
      {Links.map(link => (
        <Item key={link.id}>
          <LinkItem 
            fontSize={[2, 2, 4]} 
            p={[0, 0, 2]} 
            color='creme'
            to={link.url}
            >{link.text}</LinkItem>
        </Item>
      ))}
    </Navigation>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
