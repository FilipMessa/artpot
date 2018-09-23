// @flow
const gatsby = jest.requireActual('gatsby')
module.exports = {
  ...gatsby,
  graphql: jest.fn(() => 'mockedQuery'),
  Link: 'Link',
}
