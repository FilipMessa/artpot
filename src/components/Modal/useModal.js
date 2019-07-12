// @flow
import { useState } from 'react'

const useModal = () => {
  const [isVisible, setVisibility] = useState(false)

  function toggle() {
    if (document.body) {
      document.body.style.overflow = isVisible ? 'unset' : 'hidden'
    }
    setVisibility(!isVisible)
  }

  return {
    isVisible,
    toggle,
  }
}

export default useModal
