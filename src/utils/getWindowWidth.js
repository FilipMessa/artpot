export function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0
}
