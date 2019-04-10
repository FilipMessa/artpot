// @flow

import * as React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'

// TODO own component
const Paragraph = styled.p`
  font-size: 1em;
`

const GaleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  min-height: 300px;
`

const DetectedLandscape = () => (
  <Layout>
    <h1>Detected Landscape</h1>
    <Paragraph>
      The title of the exhibiton Detected landscape refers ot the quest of
      update of dealing with the genere of landscape painting and of th
      landscape as such. The very proad framework of this is update could be
      located in new contemporary geological epoch of Anthropocene and the
      presence..
    </Paragraph>
    <GaleryContainer>
      <span>Gallery</span>
    </GaleryContainer>
  </Layout>
)

export default DetectedLandscape
