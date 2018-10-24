// @flow
import * as React from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import theme from '../../theme'
import GlobalStyle from '../styled/GlobalStyles'
import Navigation from '../Navigation/index'
import Header from '../Header'

const Container = styled.div`
  padding: 2em;
`

export const PureLayout = ({ children }: { children: React.Node }) => (
  <Container>
    <Header />
    <div style={{ marginTop: '2em' }}>
      <Navigation />
    </div>
    <div>{children}</div>
  </Container>
)

const Layout = ({ children }: { children: React.Node }) => (
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
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <PureLayout>{children}</PureLayout>
          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
