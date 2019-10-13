// @flow

import React from 'react'
import { MODAL_STATES } from './consts'

type State = $Values<typeof MODAL_STATES>

export const ModalContext = React.createContext<{
  +modalState: ?State,
  +actions: {
    +handleOpen: () => void,
    +handleClose: () => void,
  },
}>({
  modalState: MODAL_STATES.CLOSE,
  actions: {
    handleOpen: () => {},
    handleClose: () => {},
  },
})
