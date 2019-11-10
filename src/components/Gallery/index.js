// @flow
import * as React from 'react'
import styled from 'styled-components'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { media } from '@theme'

import GalleryImage, { type GalleryImgType } from './GalleryImg'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

type Props = {|
  +images: Array<{|
    +name: string,
    +id: string,
    +childImageSharp: GalleryImgType,
  |}>,
|}

const Gallery = ({ images }: Props) => {
  const [modalIsOpen, setModalState] = React.useState(false)
  const [selectedIndex, setIndex] = React.useState(0)

  const toggleLightbox = (index: number) => {
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

      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={toggleLightbox}>
            {<Carousel views={lightImgs} currentIndex={selectedIndex} />}
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}

export default Gallery
