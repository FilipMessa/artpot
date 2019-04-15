// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { LogoConfig } from '../../configs'
import Text from '../Text'

import theme from '../../theme/index'

const Link = styled(GatsbyLink)`
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
    <Text size="large">{LogoConfig.label}</Text>
  </Link>
)

export default Logo
