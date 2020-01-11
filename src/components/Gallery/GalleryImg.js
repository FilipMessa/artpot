// @flow
import * as React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { graphql } from 'gatsby'
import { media, breakPoints } from '@theme'

import { isMobile } from '../../utils'
import ImgLoader from './ImgLoader'
import { lazyLoading } from '../../configs'
import Text from '../Text'

const Container = styled.div`
  grid-template-areas:
    'image'
    'label';

  position: relative;
  margin: 15px;

  ${media.lessThan('medium')`
    width: 100%;
  `}

  &:hover {
    p {
      opacity: 1;
    }

    img {
      ${media.greaterThan('medium')`
        opacity: 0.45;
      `}
    }
  }
`

const Label = styled(Text)`
  grid-area: label;
  transition: opacity ease-in-out 0.16s;

  ${media.greaterThan('medium')`
      position: absolute;
      opacity: 0;
      left: 0;
      right: 0;
      top: calc(50% - 0.9em);
      margin: 0 auto;
      text-align: center;
      padding: 0 1rem;
    `}
`

const Picture = styled.picture`
  grid-area: image;

  img {
    z-index: 2;
    transition: opacity ease-in-out 0.16s;
    width: 100%;
  }
`

export type GalleryImgType = {|
  +mobile: {|
    +srcSet: string,
    +height: number,
  |},
  +desktop: {|
    +srcSet: string,
    +height: number,
  |},
  +default: {|
    +src: string,
  |},
|}

type Props = {|
  +label?: string,
  +data: GalleryImgType,
  +onClick: () => void,
  +index: number,
|}

const GalleryImg = ({ label, data, onClick, index }: Props) => {
  const imgHeight = isMobile() ? data.mobile.height : data.desktop.height

  const handleClick = React.useCallback(() => onClick(index), [index, onClick])

  return (
    <Container onClick={handleClick}>
      <LazyLoad
        placeholder={<ImgLoader height={imgHeight} />}
        offset={lazyLoading.offset}
        height={imgHeight}
      >
        <Picture>
          <source
            media={`(max-width: ${breakPoints.medium})`}
            srcSet={data.mobile.srcSet}
          />
          <source
            media={`(min-width: ${breakPoints.medium})`}
            srcSet={data.desktop.srcSet}
          />

          <img src={data.default.src} alt={label} />
        </Picture>
        {label && <Label spaceBefore="small">{label}</Label>}
      </LazyLoad>
    </Container>
  )
}

export const query = graphql`
  fragment GalleryImg on File {
    id
    name
    childImageSharp {
      desktop: fixed(height: 230) {
        ...GatsbyImageSharpFixed
      }
      mobile: fixed(width: 768) {
        ...GatsbyImageSharpFixed
      }
      default: fixed(width: 500) {
        src
      }
    }
  }
`

export default GalleryImg
