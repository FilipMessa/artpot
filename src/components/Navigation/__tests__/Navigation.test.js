// @flow
import React from 'react'
import { render } from 'react-testing-library'
import Navigation from '../index'

describe('Navigation', () => {
  test('render', () => {
    const { baseElement } = render(<Navigation />)
    expect(baseElement).toMatchInlineSnapshot(`
.c0 {
  padding: 2px 0;
}

.c0 a {
  color: #030303;
  -webkit-text-decoration: none;
  text-decoration: none;
}

.c0 a:hover,
.c0 a:focus,
.c0 a:active {
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #B5B5B5;
}

<body>
  <div>
    <nav>
      <ul
        class=""
      >
        <li>
          <li
            class="c0"
          >
            <link>
              Page 1
            </link>
          </li>
        </li>
        <li>
          <li
            class="c0"
          >
            <link>
              Page 2
            </link>
          </li>
        </li>
        <li>
          <li
            class="c0"
          >
            <link>
              Page 3
            </link>
          </li>
        </li>
      </ul>
    </nav>
  </div>
</body>
`)
  })
})
