/* eslint-disable import/prefer-default-export */
// @flow

import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types';
import theme from './src/theme'
import GlobalStyle from './src/theme/GlobalStyles'
import { ModalProvider } from './src/components/Modal/ModalProvider'
import { ModalRoot } from './src/components/Modal'

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>{element}</ModalProvider>
      <ModalRoot />
      <GlobalStyle />
    </ThemeProvider>
  )
}


wrapRootElement.propTypes = {
  element: PropTypes.element
}