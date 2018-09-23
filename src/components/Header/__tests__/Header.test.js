// @flow
import React from 'react'
import { render } from 'react-testing-library'

import Header from '../index'

describe('Header', () => {
  test('render', () => {
    const { baseElement } = render(<Header onClick={jest.fn()} />)
    expect(baseElement).toMatchInlineSnapshot(`
.c1 {
  font-size: 0.9642857142857143rem;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: #030303;
}

.c2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.c2 {
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
  -webkit-appearance: none;
}

.c2::-moz-focus-inner {
  border: 0;
  padding: 0;
}

.c2:focus {
  outline: none;
}

.c2:active {
  opacity: 0.5;
}

.c3 {
  width: 30px;
  height: 2px;
  margin: 2px 0;
  background-color: #030303;
}

.c0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

@media (min-width:768px) {
  .c2 {
    display: none;
  }
}

<body>
  <div>
    <header
      class="c0"
    >
      <div>
        <link
          aria-label="Petra Messa"
          class="c1"
          to="/"
        >
          Petra Messa
        </link>
      </div>
      <button
        class="c2"
      >
        <span
          class="c3"
        />
        <span
          class="c3"
        />
        <span
          class="c3"
        />
      </button>
    </header>
  </div>
</body>
`)
  })
})
