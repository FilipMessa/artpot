import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Text from '../components/Text'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25%;
`

const NotFoundPage = () => (
  <Layout>
    <ContentWrapper>
      <div>
      <Text element="h1" weight="bold" size="large" spaceAfter="medium">404 - PAGE NOT FOUND</Text>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
      </ContentWrapper>
  </Layout>
)

export default NotFoundPage
