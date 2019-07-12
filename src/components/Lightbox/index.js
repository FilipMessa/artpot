// @flow

import * as React from 'react'
import styled from 'styled-components'
import LightboxImg from './LightboxImg'
import Modal from '../Modal'

// TODO preload images
//

// TODO colors from theme
const Container = styled.div`
  background-color: #fff;
  padding: 20px 40px;
`

// TODO improve flow
type Props = any
// {
//   images: Array<any>,
// }

const Lightbox = ({ isVisible, onClose, mainSrc }): Props => {
  const src = mainSrc?.childImageSharp?.default?.src

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      {src && (
        <Container>
          <LightboxImg src={src} />
        </Container>
      )}
    </Modal>
  )
}

export default Lightbox
