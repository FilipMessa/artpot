// @flow
import * as React from 'react'
import media from 'styled-media-query'

import styled, { ThemeProvider } from 'styled-components'
import SEO from './SEO'
import Header from './Header'
import Navigation from './Navigation'

import theme from '../theme'
import GlobalStyle from '../theme/GlobalStyles'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-areas:
    'header header'
    'navbar content';

  ${media.lessThan('medium')`
    grid-template-areas:
    'header header'
    'navbar navbar';
    'content content';
    `}
`

const HeaderW = styled.div`
  grid-area: header;
`

const Navbar = styled.div`
  grid-area: navbar;
`

const Content = styled.div`
  grid-area: content;
`

const Layout = ({ children }: { children: React.Node }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <Container>
        <HeaderW>
          <Header />
        </HeaderW>
        <Navbar>
          <Navigation />
        </Navbar>

        <Content>
          <div>{children}</div>
        </Content>
      </Container>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout
