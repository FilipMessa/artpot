import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import Helmet from 'react-helmet'

export const ContentSEO = ({ data }) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: data.site.siteMetadata.description },
      { name: 'keywords', content: data.site.siteMetadata.keywords },
    ]}
  >
    <html lang="en" />
  </Helmet>
)

const SEO = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data) => <ContentSEO data={data} />}
  />
)

ContentSEO.propTypes = {
  // TODO
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

export default SEO
