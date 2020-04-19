import { graphql, Link as GatsbyLink, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../theme/index'
import Text from '../Text'

const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 13px;

  ${media.lessThan('medium')`
    font-size: 1.233rem;
  `}
`

Link.defaultProps = {
  theme,
}

const Logo = ({ url = '/' }) => (
  <StaticQuery
    query={graphql`
      query LogoQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data) => (
      <Link
        data-testid="logo-link"
        to={url}
        aria-label={data.site.siteMetadata.title}
      >
        <Text size="large">{data.site.siteMetadata.title}</Text>
      </Link>
    )}
  />
)

Logo.propTypes = {
  url: PropTypes.string,
}

export default Logo
