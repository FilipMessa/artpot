// @flow
import * as React from 'react'
import styled from 'styled-components'
import { media } from '@theme'

import GalleryImage, { type GalleryImgType } from './GalleryImg'
import Lightbox from '../Lightbox'
import useLightBox from '../Lightbox/useLightbox' // TODO move into lightbox index

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

// selectedImg send index instead and whole Array with imgs into the LightBox

// TODO create GraphQL Fragment
const Gallery = ({ images }: Props) => {
  const [imgIndex, setImgIndex] = React.useState(undefined)
  // const { isVisible, toggleLightbox, selectedImg, selectImg } = useLightBox() // TODO useLightbox

  return (
    <>
      <Container>
        {images.map((img, index) => (
          <GalleryImage
            onClick={() => setImgIndex(index)}
            img={img}
            key={img.id}
            data={img.childImageSharp}
            label={`The Mound, 170 x 200 cm, oil on canvas ${img.name}`}
          />
        ))}
      </Container>
      <Lightbox
        isVisible={typeof imgIndex === 'number'}
        onClose={() => setImgIndex(undefined)}
        mainSrc={images[imgIndex]}
        nextSrc={images[imgIndex + 1]} // TODO images.length
        prevSrc={images[imgIndex - 1]}
      />
    </>
  )
}

export default Gallery
