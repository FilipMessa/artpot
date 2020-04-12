import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Header from './Header'
import Navigation from './Navigation'
import ScrollTop from './ScrollTop'
import SEO from './SEO'
import theme from '../theme'

const Container = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    'header header header'
    'navbar content ${({ withRightSpace }) => withRightSpace ? 'rightSpace' : 'content'}';
  padding: ${({ theme }) => theme.layout.padding.desktop};

  ${media.lessThan('medium')`
    padding: ${({ theme }) => theme.layout.padding.mobile};
    padding-bottom: 40px;
    grid-template-columns: none;
    grid-template-rows: 1fr;

    grid-gap: 20px;

    grid-template-areas:
      'header'
      'navbar'
      'content';
    `}
`
Container.defaultProps = {
  theme,
}

const RightSpace = styled.div`
  grid-area: rightSpace;
  ${media.lessThan('medium')`
    display: none;
  `}
`

const Navbar = styled.div`
  grid-area: navbar;
`

const Content = styled.div`
  grid-area: content;
`

const Layout = ({ children, withRightSpace = true }) => (
  <>
    <SEO />
    <Container withRightSpace={withRightSpace}>
      <Navbar>
        <Header />
        <Navigation />
      </Navbar>
      <Content>
        <main>{children}</main>
      </Content>
      {withRightSpace && <RightSpace />}
      {typeof window !== 'undefined' && <ScrollTop />}
    </Container>
  </>
)

Layout.propTypes = {
  withRightSpace: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default Layout
