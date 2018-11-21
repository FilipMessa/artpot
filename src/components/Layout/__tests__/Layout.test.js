// @flow
/* eslint-disable no-console */
import React from 'react'
import { render } from 'react-testing-library'

import { PureLayout as Layout } from '../index'

// $FlowTest
console.error = jest.fn()

describe('Layout', () => {
  test('render', () => {
    const { getByTestId } = render(<Layout>Layout</Layout>)
    expect(getByTestId('header')).toBeDefined()
  })
})
