import { media } from '@theme'
import PropTypes from 'prop-types'
import React from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import styled from 'styled-components'
import { isMobile } from '../../utils'
import GalleryImage from './GalleryImg'

const WHITE = 'rgba(255, 255, 255, 0.90)'
const BLACK = 'rgba(0, 0, 0, 0.6)'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.greaterThan('medium')`
    flex-direction: row;

  `}
`

const getButtonStyles = (base, state) => {
  return {
    ...base,
    color: state.isFullscreen ? WHITE : BLACK,
  }
}

const modalCustomStyles = {
  blanket: base => ({
    ...base,
    backgroundColor: `${WHITE} !important`,
  }),
}

const carouselCustomStyles = {
  header: base => ({
    ...base,
    background: 'none !important',
  }),
  footer: base => ({
    ...base,
    background: 'none !important',
  }),
  headerClose: getButtonStyles,
  headerFullscreen: getButtonStyles,
  navigationPrev: getButtonStyles,
  navigationNext: getButtonStyles,
  footerCount: getButtonStyles,
}

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
  }) => ({
    src,
  })

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
            <Modal onClose={toggleLightbox} styles={modalCustomStyles}>
              <Carousel
                styles={carouselCustomStyles}
                views={lightImgs}
                currentIndex={selectedIndex}
              />
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
