// @flow
import React from 'react'
import { render } from 'react-testing-library'
import Logo from '../index'

describe('Logo', () => {
  test('render', () => {
    const { baseElement } = render(<Logo />)
    expect(baseElement).toMatchInlineSnapshot(`
.c0 {
  font-size: 0.9642857142857143rem;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #030303;
}

<body>
  <div>
    <div>
      <link
        aria-label="Petra Messa"
        class="c0"
        to="/"
      >
        Petra Messa
      </link>
    </div>
  </div>
</body>
`)
  })
})
