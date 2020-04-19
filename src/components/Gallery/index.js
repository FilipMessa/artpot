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

const FooterWrapper = styled.div`
  margin-left: 56px;
  padding-right: 10px;
  position: absolute;
  bottom: 5%;
  max-width: calc(15vw - 56px);
  color: ${BLACK};
`

const getButtonStyles = (base, state) => {
  return {
    ...base,
    color: state.isFullscreen ? WHITE : BLACK,
  }
}

const modalCustomStyles = {
  blanket: (base) => ({
    ...base,
    backgroundColor: `${WHITE} !important`,
  }),
}

const carouselCustomStyles = {
  header: (base) => ({
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

  const toggleLightbox = (index) => {
    setModalState(!modalIsOpen)
    setIndex(index)
  }

  const getImagesSrc = ({
    label,
    name,
    material,
    dimensions,
    year,
    type,
    childImageSharp: {
      default: { src },
    },
  }) => ({
    src,
    label,
    name,
    material,
    dimensions,
    year,
    type,
    caption: label,
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
              <>
                <Carousel
                  components={{
                    // eslint-disable-next-line react/prop-types
                    Footer: ({ currentView }) => {
                      // eslint-disable-next-line react/prop-types
                      return (
                        currentView?.label && (
                          <FooterWrapper>{currentView.label}</FooterWrapper>
                        )
                      )
                    },
                  }}
                  styles={carouselCustomStyles}
                  views={lightImgs}
                  currentIndex={selectedIndex}
                />
              </>
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
