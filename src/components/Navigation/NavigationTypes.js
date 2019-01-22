// @flow

type ID = string | number // should be from common types

export type RouteType = {|
  +id: ID,
  +label: string,
  +alt: string,
  +src: string,
  +subRoutes: ?Array<RouteType>,
|}
