// TODO find better place for this file

import  { css } from 'styled-components'

export const resetButtonStyles = css`
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

  &:focus {
    outline: 0;
  }

  &:active {
    opacity: 0.5;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`
