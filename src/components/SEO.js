// @flow
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type GraphQLData = {|
  +site: {|
    +siteMetadata: {|
      +title: string,
      +description: string,
      +keywords: string,
    |},
  |},
|}

export const ContentSEO = ({ data }: { data: GraphQLData }) => (
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
    render={(data: GraphQLData) => <ContentSEO data={data} />}
  />
)

export default SEO
