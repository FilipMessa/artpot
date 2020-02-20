import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Header from './Header'
import Navigation from './Navigation'
import SEO from './SEO'

const Container = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    'header header header'
    'navbar content leftSide';
  padding: ${({ theme }) => theme.layout.padding};
  ${media.lessThan('medium')`
    grid-template-columns: none;
    grid-template-rows: 1fr;

    grid-gap: 20px;

    grid-template-areas:
      'header'
      'navbar'
      'content';
    `}
`

const LeftSide = styled.div`
  grid-area: leftSide;
  ${media.lessThan('medium')`
    display: none;
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

const Layout = ({ children }) => (
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
      <LeftSide />
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default Layout
