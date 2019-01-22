// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import theme from '../../theme/index'
import { LogoConfig } from '../../configs'

const Link = styled(GatsbyLink)`
  font-size: 0.84375em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  padding: 1.063em 0;
`

Link.defaultProps = {
  theme,
}

const Logo = () => (
  <Link
    alt="link to the home page"
    data-testid="logo-link"
    to={LogoConfig.url}
    aria-label={LogoConfig.label}
  >
    {LogoConfig.label}
  </Link>
)

export default Logo
