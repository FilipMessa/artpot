import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import * as React from 'react'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'

// TODO values should come from theme
const Item = styled(Link)`
  padding: 2px 0;
  cursor: pointer;
  text-decoration: none;

  > span:hover,
  svg {
    opacity: ${({ theme }) => theme.components.navigation.link.hoverOpacity};
  }
`

const NavItem = ({ label, to, partiallyActive = false, theme }) => (
  <li>
    <Item
      activeStyle={{ opacity: theme.components.navigation.link.activeOpacity }}
      partiallyActive={partiallyActive}
      to={`${to}`}
    >
      <Text element="span">{label}</Text>
    </Item>
  </li>
)

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  partiallyActive: PropTypes.bool,
}

export default withTheme(NavItem)
