import * as React from 'react'
import styled from 'styled-components'
import Carousel, { Modal, ModalGateway } from 'react-images'
import PropTypes from 'prop-types'
import { media } from '@theme'
import GalleryImage from './GalleryImg'

import { isMobile } from '../../utils'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

const Gallery = ({ images }) => {
  const [modalIsOpen, setModalState] = React.useState(false)
  const [selectedIndex, setIndex] = React.useState(0)

  const toggleLightbox = index => {
    setModalState(!modalIsOpen)
    setIndex(index)
  }

  const getImagesSrc = ({
    childImageSharp: {
      default: { src },
    },
  }) => {
    return { src }
  }

  const lightImgs = images.map(getImagesSrc)

  return (
    <>
      <Container>
        {images.map((img, index) => (
          <GalleryImage
            onClick={toggleLightbox}
            key={img.id}
            data={img.childImageSharp}
            label={`The Mound, 170 x 200 cm, oil on canvas ${img.name}`}
            index={index}
          />
        ))}
      </Container>

      {!isMobile() && (
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={toggleLightbox}>
              <Carousel views={lightImgs} currentIndex={selectedIndex} />
            </Modal>
          ) : null}
        </ModalGateway>
      )}
    </>
  )
}
Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.element),
}

export default Gallery
