// @flow
import * as React from 'react'

import styled, { ThemeProvider } from 'styled-components'
import Grid from 'styled-components-grid'
import SEO from './SEO'
import Header from './Header'
import Navigation from './Navigation'

import theme from '../theme'
import GlobalStyle from './styled/GlobalStyles'

import { generateMocksData } from './Navigation/generateMocksData'

const MOCKED_ROUTES = generateMocksData(4)

const BaseGrid = styled(Grid)`
  padding: ${({ theme }) => theme.layout.padding};
`

const Layout = ({ children }: { children: React.Node }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <BaseGrid>
        <Grid.Unit size={1}>
          <Header />
        </Grid.Unit>
        <Grid.Unit size={{ tablet: 1, desktop: 1 / 5 }}>
          <Navigation routes={MOCKED_ROUTES} />
        </Grid.Unit>
        <Grid.Unit size={{ tablet: 1, desktop: 4 / 5 }}>{children}</Grid.Unit>
      </BaseGrid>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout
