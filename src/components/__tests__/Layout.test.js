// @flow
import React from 'react'
import { render } from 'react-testing-library'
import Layout from '../Layout'

describe('Layout', () => {
  test('render', () => {
    const { baseElement } = render(<Layout>Child</Layout>)
    expect(baseElement).toMatchSnapshot()
  })
})
