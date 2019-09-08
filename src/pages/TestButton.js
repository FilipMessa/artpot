// @flow
import React from 'react'
import { ModalContext } from '../components/Modal/ModalContext'

export default () => {
  const {
    actions: { handleOpen },
    state,
  } = React.useContext(ModalContext)

  return <button onClick={handleOpen}>Open Kuzvaaa!</button>
}
