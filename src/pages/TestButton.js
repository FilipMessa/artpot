// @flow
import React from 'react'
import { ModalContext } from '../components/Modal/ModalContext'

export default () => {
  const {
    actions: { handleOpen },
  } = React.useContext(ModalContext)

  return <button type="button" onClick={handleOpen}>Open Kuzvaaa!</button>
}
