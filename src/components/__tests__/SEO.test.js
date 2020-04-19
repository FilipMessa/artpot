import * as React from 'react'
import { render } from '@testing-library/react'
import { ContentSEO as SEO } from '../SEO'

describe('SEO', () => {
  test('render', () => {
    const data = {
      site: {
        siteMetadata: {
          title: 'Page Title',
          description: 'lorem ipsum dolor',
          keywords: 'keyword_1, keyword_2',
        },
      },
    }
    const { baseElement } = render(<SEO data={data} />)

    expect(baseElement).toBeDefined()
  })
})
