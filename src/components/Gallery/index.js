import PropTypes from 'prop-types'
import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import styled from 'styled-components'
import { media } from '@theme'
import { isMobile } from '../../utils'
import GalleryImage from './GalleryImg'


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
            label={img.label}
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
  images: PropTypes.array,
}

export default Gallery
