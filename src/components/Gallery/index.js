// @flow
import * as React from 'react'
import styled from 'styled-components'
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

// TODO create GraphQL Fragment
const Gallery = ({ images }: Props) => {
  return (
    <Container>
      {images.map(img => (
        <GalleryImage
          key={img.id}
          data={img.childImageSharp}
          label={`The Mound, 170 x 200 cm, oil on canvas ${img.name}`}
        />
      ))}
    </Container>
  )
}

export default Gallery
