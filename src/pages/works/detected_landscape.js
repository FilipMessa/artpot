// @flow

import * as React from 'react'
import styled from 'styled-components'

import Layout from '../../components/Layout'
import Text from '../../components/Text'
import ReadMore from '../../components/ReadMore'

const GaleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  min-height: 300px;
  margin-top: 1.2em;
`

const DetectedLandscape = () => (
  <Layout>
    <ReadMore
      text="The title of the exhibiton Detected landscape refers ot the quest of
      update of dealing with the genere of landscape painting and of th
      landscape as such. The very proad framework of this is update could be
      located in new contemporary geological epoch of Anthropocene and the
      presence, The title of the exhibiton Detected landscape refers ot the quest of
      update of dealing with the genere of landscape painting and of th
      landscape as such. The very proad framework of this is update could be
      located in new contemporary geological. The title of the exhibiton Detected landscape refers ot the quest of
      update of dealing with the genere of landscape painting and of th
      landscape as such. The very proad framework of this is update could be
      located in new contemporary geological.The title of the exhibiton Detected landscape refers ot the quest of
      update of dealing with the genere of landscape painting and of th
      landscape as such. The very proad framework of this is update could be
      located in new contemporary geological."
    />
    <GaleryContainer>
      <Text>Gallery</Text>
    </GaleryContainer>
  </Layout>
)

export default DetectedLandscape
