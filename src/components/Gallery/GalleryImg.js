import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { media, breakPoints } from '@theme'

import { isMobile } from '../../utils'
// import ImgLoader from './ImgLoader'
import { LAZY_LOADING } from '../../configs'
import Text from '../Text'

const Container = styled.div`
  grid-template-areas:
    'image'
    'label';

  display: flex;
  position: relative;
  margin-bottom: 1.3em;
  margin-left: 1.3em;

  ${media.lessThan('medium')`
    width: 100%;
    flex-direction: column;
    margin-left: 0em;
    margin-bottom: 2em;
    
  `}

  &:hover {
    .label {
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
  font-size: 0.9em;

  ${media.greaterThan('medium')`
      align-self: center;
      margin: 0 auto;
      text-align: center;
      padding: 0 1em;
    `}
`

const LabelWrapper = styled.div`
  width: 100%;
  grid-area: label;
  transition: opacity ease-in-out 0.16s;

  ${media.greaterThan('medium')`

    position: absolute;
    opacity: 0;
    margin: 0 auto;
    top: 46%;
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

const GalleryImg = ({ label, data, onClick, index }) => {
  const size = isMobile()
    ? { height: data.mobile.height, width: data.mobile.width }
    : { height: data.desktop.height, width: data.desktop.width }

  const handleClick = React.useCallback(() => onClick(index), [index, onClick])

  return (
    <Container onClick={handleClick}>
      <LazyLoad once offset={LAZY_LOADING.offset} height={size.height}>
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
        {label && (
          <LabelWrapper className="label">
            <Label spaceBefore="small">{label}</Label>
          </LabelWrapper>
        )}
      </LazyLoad>
    </Container>
  )
}

GalleryImg.propTypes = {
  label: PropTypes.element,
  onClick: PropTypes.func.isRequired,
  // TODO improve PropTypes
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  index: PropTypes.number,
}

export const query = graphql`
  fragment GalleryImg on File {
    id
    name
    childImageSharp {
      desktop: fixed(height: 260) {
        ...GatsbyImageSharpFixed
      }
      mobile: fixed(width: 768) {
        ...GatsbyImageSharpFixed
      }
      default: fluid(maxWidth: 2000) {
        src
      }
    }
  }
`

export default React.memo(GalleryImg)
