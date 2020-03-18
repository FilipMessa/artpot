// TODO use hook 
import { getWindowWidth } from './getWindowWidth'

export function isMobile() {
  return getWindowWidth() < 768
}
