import React from 'react'
import { MODAL_STATES } from './consts'

export const ModalContext = React.createContext({
  modalState: MODAL_STATES.CLOSE,
  actions: {
    handleOpen: () => {},
    handleClose: () => {},
  },
})
