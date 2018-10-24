// @flow
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-testing-library'
import theme from '../../../theme'

import GlobalStyles from '../GlobalStyles'

describe('BlankButton', () => {
  test('render', () => {
    const { baseElement } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
      </ThemeProvider>
    )

    expect(baseElement).toBeDefined()
  })
})
