// @flow
/* eslint-disable */
// This is temporary file just for development
import faker from 'faker'

function generateRoute(subRoutes = null) {
  return {
    label: faker.random.word(),
    alt: faker.random.word(),
    src: '#',
    id: faker.random.number(),
    subRoutes,
  }
}

export function generateMocksData(count: number) {
  const routes = []

  for (let i = 0; i <= count; i++) {
    const subRoutes = i === count ? [] : null
    if (Array.isArray(subRoutes)) {
      for (let i = 0; i <= 4; i++) {
        subRoutes.push(generateRoute())
      }
    }
    routes.push(generateRoute(subRoutes))
  }
  return routes
}
