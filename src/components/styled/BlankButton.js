import styled from 'styled-components'

export default styled.button`
   {
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

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  &:focus {
    outline: none;
  }
`
