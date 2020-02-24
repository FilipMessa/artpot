import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

const SubNavItem = styled(NavItem)`
  padding: 1.5px 0;
`

const query = graphql`
  query SubNavigationQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(works)/" } }) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`

const NavContainer = styled.nav`
  margin-top: 50px;
`

const getNavigationData = ({ allMarkdownRemark }) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  if (!pathname.match('/works')) {
    return null
  }
  return (
    <NavContainer>
      <ul>
        {allMarkdownRemark.nodes.map(({ frontmatter }) => (
          <SubNavItem
            key={frontmatter.title}
            label={frontmatter.title}
            to={`/works/${frontmatter.title
              .toLowerCase()
              .replace(/ /g, '_')
              .replace(/[^\w\s]/gi, '')}`} // @TODO refactor
          />
        ))}
      </ul>
    </NavContainer>
  )
}

getNavigationData.propTypes = {
  allMarkdownRemark: PropTypes.object,
}

const SubNavigation = () => {
  return <StaticQuery query={query} render={getNavigationData} />
}

export default React.memo(SubNavigation)
