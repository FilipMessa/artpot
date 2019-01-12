// @flow
import * as React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import Grid from 'styled-components-grid'
import SEO from './SEO'
import Header from './Header'

import theme from '../theme'
import GlobalStyle from './styled/GlobalStyles'

const Navigation = styled.div`
  background-color: blue;
  opacity: 0.4;
`

const Layout = ({ children }: { children: React.Node }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <Grid>
        <Grid.Unit size={1}>
          <Header />
        </Grid.Unit>
        <Grid.Unit size={{ tablet: 1, desktop: 1 / 4 }}>
          <Navigation>Navigation</Navigation>
        </Grid.Unit>
        <Grid.Unit size={{ tablet: 1, desktop: 3 / 4 }}>{children}</Grid.Unit>
      </Grid>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout
