// @flow
import React from 'react'
import { render } from 'react-testing-library'
import Navigation from '../index'

describe('Navigation', () => {
  test('render', () => {
    const { baseElement } = render(<Navigation />)
    expect(baseElement).toMatchInlineSnapshot(`
<body>
  <div>
    <ul
      class=""
    >
      <li>
        <a
          href="#"
        >
          Page 1
        </a>
      </li>
      <li>
        <a
          href="#"
        >
          Page 2
        </a>
      </li>
      <li>
        <a
          href="#"
        >
          Page 3
        </a>
      </li>
    </ul>
  </div>
</body>
`)
  })
})
