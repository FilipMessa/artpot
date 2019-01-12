// @flow
import React from 'react'
import { render } from 'react-testing-library'
import Layout from '../Layout'

jest.mock('../SEO', () => () => <div />)

describe('Layout', () => {
  const Child = () => <div data-testid="test-child">Child Element</div>
  test('render', () => {
    const { getByTestId } = render(
      <Layout>
        <Child />
      </Layout>
    )

    expect(getByTestId('header')).toBeDefined()
    expect(getByTestId('test-child')).toBeDefined()
  })
})
