// @flow
import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    if (document.body) {
      document.body.style.overflow = isShowing ? 'unset' : 'hidden'
    }
    setIsShowing(!isShowing)
  }

  return {
    isShowing,
    toggle,
  }
}

export default useModal
