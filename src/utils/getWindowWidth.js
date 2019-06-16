// @flow
export default function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0
}
