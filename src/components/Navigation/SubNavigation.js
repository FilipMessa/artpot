import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
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
  return (
    <NavContainer>
      {allMarkdownRemark.nodes.map(({ frontmatter }) => (
        <NavItem label={frontmatter.title} to={frontmatter.slug} />
      ))}
    </NavContainer>
  )
}

const SubNavigation = () => {
  return <StaticQuery query={query} render={getNavigationData} />
}

export default SubNavigation
