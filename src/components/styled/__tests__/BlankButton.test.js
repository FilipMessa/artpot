// @flow
import React from 'react'
import { render } from 'react-testing-library'

import BlankButton from '../BlankButton'

describe('BlankButton', () => {
  test('render', () => {
    const { baseElement, getByText } = render(<BlankButton>Button</BlankButton>)
    getByText('Button', (content, element) => element.tagName.toLowerCase() === 'button')
    expect(baseElement.firstChild).toMatchInlineSnapshot(`
.c0 {
  cursor: pointer;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
}

.c0::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.c0:focus {
  outline: none;
}

<div>
  <button
    class="c0"
  >
    Button
  </button>
</div>
`)
  })
})
