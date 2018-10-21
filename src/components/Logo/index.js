// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import theme from '../../theme/index'
import { LogoConfig } from '../../configs'

const Link = styled(GatsbyLink)`
  font-size: 0.9642857142857143rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

Link.defaultProps = {
  theme,
}

const Logo = () => (
  <div>
    <Link
      alt="link to the home page"
      data-testid="logo-link"
      to={LogoConfig.url}
      aria-label={LogoConfig.label}
    >
      {LogoConfig.label}
    </Link>
  </div>
)

export default Logo
