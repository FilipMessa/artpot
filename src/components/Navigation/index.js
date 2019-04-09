// @flow
// TODO Tests

import * as React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem'
import type { RouteType } from './NavigationTypes'

const SubContainer = styled.ul`
  margin-top: 1.75em;
`

type Props = {
  routes: Array<RouteType>,
}
type State = {
  activeRoute: ?RouteType,
}

class Navigation extends React.Component<Props, State> {
  state = {
    activeRoute: null,
  }

  setActiveRoute = (route: RouteType) => {
    this.setState({ activeRoute: route })
  }

  render() {
    const { routes } = this.props
    const { activeRoute } = this.state

    return (
      <>
        <ul data-testid="navigation">
          {routes.map(route => (
            <NavItem
              key={route.id}
              route={route}
              isActive={activeRoute === route.label}
              onClick={this.setActiveRoute}
            />
          ))}
        </ul>
        {activeRoute && activeRoute.subRoutes && (
          <SubContainer>
            {activeRoute.subRoutes.map(route => (
              <NavItem
                key={route.id}
                route={route}
                onClick={() => {
                  // TODO
                }}
              />
            ))}
          </SubContainer>
        )}
      </>
    )
  }
}

export default Navigation
