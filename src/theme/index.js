// @flow

import { generateMedia } from 'styled-media-query'

// MediaQueries
export const breakPoints = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}

export const media = generateMedia(breakPoints)

// Theme
const typography = {
  defaultSize: '14px',
  fontSizes: {
    small: '0.777em',
    normal: '1em',
    large: '1.3em',
  },
  colors: {
    primary: '#030303',
    secondary: '#B5B5B5',
  },
  weight: {
    normal: 500,
    bold: 800,
  },
  spacings: {
    small: '0.444rem',
    medium: '0.888rem',
    large: '1.333rem',
  },
}

const navigation = {
  link: {
    hoverOpacity: 0.4,
    activeOpacity: 0.5,
  },
}

const poster = {
  label: {
    fontSize: '0.781rem',
  },
}

const imageLoader = {
  color: '#A9A9A9',
  size: 65,
}

const colors = {
  black: '#030303',
  nobel: '#B5B5B5',
}

const modal = {
  overlayColor: 'rgba(0,0,0,0.5)',
}

const zIndex = [10, 20, 30, 40, 50]

const theme = {
  typography,
  zIndex,
  colors,
  layout: {
    padding: '1.063em',
  },
  components: {
    poster,
    navigation,
    imageLoader,
    modal,
  },
}

export default theme
