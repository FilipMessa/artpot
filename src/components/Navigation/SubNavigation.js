import { useMatch } from '@reach/router'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import NavItem from './NavItem'

const SubNavItem = styled(NavItem)`
  padding: 0.1rem 0;
  ${media.lessThan('medium')`
    padding: 0.25rem 0;
  `}
`

const query = graphql`
  query SubNavigationQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(setting)/" } }) {
      nodes {
        frontmatter {
          navItems {
            title
          }
        }
      }
    }
  }
`

const NavContainer = styled.nav`
  margin-top: 50px;
`

const RenderNavigationData = ({ allMarkdownRemark }) => {
  const isWorkpage = useMatch('/works/*')

  // SubNavigation should render only for workpages
  if (!isWorkpage) {
    return null
  }

  return (
    <NavContainer>
      <ul>
        {allMarkdownRemark.nodes[0].frontmatter.navItems.map(({ title }) => (
          <SubNavItem
            key={title}
            label={title}
            to={`/works/${title
              .toLowerCase()
              .replace(/ /g, '_')
              .replace(/[^\w\s]/gi, '')}`} // @TODO refactor to helper function
          />
        ))}
      </ul>
    </NavContainer>
  )
}

RenderNavigationData.propTypes = {
  allMarkdownRemark: PropTypes.object,
}

const SubNavigation = () => {
  return <StaticQuery query={query} render={RenderNavigationData} />
}

export default React.memo(SubNavigation)
