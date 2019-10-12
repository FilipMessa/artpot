/* eslint-disable import/prefer-default-export */
// @flow

import React from 'react'

const defaultState = null

type State = 'isOpen' | 'isClose'

export const ModalContext = React.createContext<{
  +state: ?State,
  +actions: {
    +toggle: () => void,
  },
}>({
  state: defaultState,
  actions: {
    handleOpen: () => {},
    handleClose: () => {},
  },
})
