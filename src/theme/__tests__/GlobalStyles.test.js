import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import theme from '../index'

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
