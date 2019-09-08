// @flow

import * as React from 'react'
import { ModalContext } from './ModalContext'

function switchBodyScroll(state) {
  if (document.body) {
    document.body.style.overflow = state
  }
}

export function ModalProvider({ children }: { children: ?React.Node }) {
  const [modalState, setModalState] = React.useState('isClose')

  const state = {
    state: modalState,
    actions: {
      handleClose: () => {
        switchBodyScroll('unset')
        setModalState('isClose')
      },
      handleOpen: () => {
        switchBodyScroll('hidden')
        setModalState('isOpen')
      },
    },
  }

  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
}
