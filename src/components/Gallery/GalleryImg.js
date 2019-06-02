// @flow
import * as React from 'react'
import styled from 'styled-components'
import { media, breakPoints } from '@theme'

import Text from '../Text'

/*
 * TODO Lazy loading
 */

const Container = styled.div`
  margin: 15px;
  grid-template-areas:
    'image'
    'label';
  ${media.lessThan('medium')`
     width: 100%;
  `}
`

const Label = styled(Text)`
  grid-area: label;
`

const Picture = styled.picture`
  grid-area: image;

  img {
    width: 100%;
  }
`

export type GalleryImgType = {|
  +mobile: {|
    +srcSet: string,
  |},
  +desktop: {|
    +srcSet: string,
  |},
  +default: {|
    +src: string,
  |},
|}

type Props = {
  +label?: string,
  +data: GalleryImgType,
}

const GalleryImg = ({ label, data }: Props) => {
  return (
    <Container>
      <Picture>
        <source
          media={`(max-width: ${breakPoints.medium})`}
          srcSet={data.mobile.srcSet}
        />
        <source
          media={`(min-width: ${breakPoints.medium})`}
          srcSet={data.desktop.srcSet}
        />
        <img
          src={data.default.src}
          alt="Chris standing up holding his daughter Elva"
        />
      </Picture>
      {label && <Label spaceBefore="small">{label}</Label>}
    </Container>
  )
}

export default GalleryImg
