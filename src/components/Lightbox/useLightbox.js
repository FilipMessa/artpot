// @flow

import { useState } from 'react'

const useLightbox = () => {
  const [isVisible, setVisibility] = useState(false)
  const [selectedImg, settImg] = useState(null)

  function toggleLightbox() {
    if (document.body) {
      document.body.style.overflow = isVisible ? 'unset' : 'hidden'
    }
    setVisibility(!isVisible)
  }

  function selectImg(img) {
    settImg(img)
  }

  return {
    isVisible,
    toggleLightbox,
    selectedImg,
    selectImg,
  }
}

export default useLightbox
