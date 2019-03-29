import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { MainGrid } from './global/grids'
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './global/header'
import FindMe from './global/find-me'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <MainGrid>
          <header>
            <Header siteTitle={data.site.siteMetadata.title} />
            <FindMe />
          </header>
          <section>
            <div className="main">{children}</div>
          </section>
        </MainGrid>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
