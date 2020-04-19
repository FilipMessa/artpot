import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { withTheme } from 'styled-components'
import Text from '../Text'
import theme from '../../theme'


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

Item.defaultProps = {
  theme
}

const NavItem = ({ label, to, partiallyActive = false, theme, className, children }) => (
  <li className={className}>
    <Item
      activeStyle={{ opacity: theme.components.navigation.link.activeOpacity }}
      partiallyActive={partiallyActive}
      to={`${to}`}
    >
      <Text element="span">{label}</Text>
    </Item>
    {children}
  </li>
)

NavItem.defaultProps = {
  theme
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  theme: PropTypes.object,
  partiallyActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
])
}

export default withTheme(React.memo(NavItem))
