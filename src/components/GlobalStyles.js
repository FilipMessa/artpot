// @flow

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Droid Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Droid Sans Regular'), local('DroidSans-Regular'), url(https://fonts.gstatic.com/s/droidsans/v8/SlGVmQWMvZQIdix7AFxXkHNSbRYXags.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin */
  @font-face {
    font-family: 'Droid Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Droid Sans Bold'), local('DroidSans-Bold'), url(https://fonts.gstatic.com/s/droidsans/v8/SlGWmQWMvZQIdix7AFxXmMh3eDs1ZyHKpWg.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    font-family: 'Droid Sans';
    font-size: ${({ theme }) => theme.typography.defaultSize};
  }
`

export default GlobalStyle
