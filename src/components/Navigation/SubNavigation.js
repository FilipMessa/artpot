import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavItem from './NavItem'

const query = graphql`
  query SubNavigationQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(works)/" } }) {
      nodes {
        frontmatter {
          slug
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
        <NavItem label={frontmatter.title} to={frontmatter.slug} />
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
