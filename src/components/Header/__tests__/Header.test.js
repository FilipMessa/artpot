// @flow
import React from 'react'
import { render } from 'react-testing-library'
import Header from '../index'
import { LogoConfig } from '../../../configs'

describe('Layout', () => {
  test('render', () => {
    const { baseElement, getByTestId } = render(<Header />)

    expect(baseElement).toBeDefined()
    expect(getByTestId('logo-link').getAttribute('href')).toBe(LogoConfig.url)
    expect(getByTestId('logo-link').getAttribute('alt')).toBe(
      'link to the home page'
    )
    expect(getByTestId('logo-link').textContent).toBe(LogoConfig.label)
  })
})
