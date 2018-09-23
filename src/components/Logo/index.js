// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import theme from '../../theme/index'

const Link = styled(GatsbyLink)`
  font-size: 0.9642857142857143rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

Link.defaultProps = {
  theme,
}

// TODO add get from config
const LogoConfig = {
  label: 'Petra Messa',
  url: '/',
}

const Logo = () => (
  <div>
    <Link to={LogoConfig.url} aria-label={LogoConfig.label}>
      {LogoConfig.label}
    </Link>
  </div>
)

export default Logo
