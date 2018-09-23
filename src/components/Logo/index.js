// @flow strict

import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// TODO theme
const MyLink = styled(Link)`
  font-size: 0.9642857142857143rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`

// TODO add get from config
const LogoConfig = {
  label: 'Petra Messa',
  url: '/',
}

const Logo = () => (
  <div>
    <MyLink to={LogoConfig.url} aria-label={LogoConfig.label}>
      {LogoConfig.label}
    </MyLink>
  </div>
)

export default Logo
