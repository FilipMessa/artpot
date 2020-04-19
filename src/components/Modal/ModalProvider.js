import * as React from 'react'
import PropTypes from 'prop-types'
import { ModalContext } from './ModalContext'
import { MODAL_STATES } from './consts'

function switchBodyScroll(state) {
  if (document.body) {
    document.body.style.overflow = state
  }
}

export function ModalProvider({ children }) {
  const [modalState, setModalState] = React.useState('isClose')

  const handleState = (type) => () => {
    const bodyScorllState = MODAL_STATES.OPEN === type ? 'hidden' : 'unset'

    switchBodyScroll(bodyScorllState)
    setModalState(type)
  }

  const state = {
    modalState,
    actions: {
      handleClose: handleState(MODAL_STATES.CLOSE),
      handleOpen: handleState(MODAL_STATES.OPEN),
    },
  }

  return <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
}

ModalProvider.propTypes = {
  children: PropTypes.element,
}
