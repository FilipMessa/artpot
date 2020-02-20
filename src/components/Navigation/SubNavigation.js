import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'

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
      {allMarkdownRemark.nodes.map(({ frontmatter }) => (
        <NavItem
          label={frontmatter.title}
          to={`works/${frontmatter.title.toLowerCase().replace(/ /g, '_')}`}
        />
      ))}
    </NavContainer>
  )
}

getNavigationData.propTypes = {
  allMarkdownRemark: PropTypes.object,
}

const SubNavigation = () => {
  return <StaticQuery query={query} render={getNavigationData} />
}

export default SubNavigation
