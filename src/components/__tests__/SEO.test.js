// @flow
import React from 'react'
import { render } from 'react-testing-library'
import { ContentSEO as SEO } from '../SEO'

describe('SEO', () => {
  test('render', () => {
    const data = { site: { siteMetadata: { title: 'Page Title' } } }
    const { baseElement } = render(<SEO data={data} />)

    expect(baseElement).toBeDefined()
  })
})
