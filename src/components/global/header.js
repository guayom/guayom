import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Navigation =styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`

const Item = styled.li`
  padding: 0;
  margin: 0;
  text-align: center;
  height: 100%;
  border-right: 1px solid #ddd;

  &:last-of-type {
    border-right: none;
  }

  a {
    display: block;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
          <Link to={link.url}>{link.text}</Link>
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
