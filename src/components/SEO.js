// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type GraphQLData = { site: { siteMetadata: { title: string } } }

export const ContentSEO = ({ data }: { data: GraphQLData }) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
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
          }
        }
      }
    `}
    render={(data: GraphQLData) => <ContentSEO data={data} />}
  />
)

export default SEO
