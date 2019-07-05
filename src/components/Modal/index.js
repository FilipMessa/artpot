// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export { default as ModalRoot } from './ModalRoot'
export { default as useModal } from './useModal'

const Overlay = styled.div`
  z-index: ${({ theme }) => theme.zIndex[3]};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.components.modal.overlayColor};
`

type Props = {
  isShowing: boolean,
  onClose: () => void,
  children: React.Node,
}

const Modal = ({ isShowing, onClose, children }: Props) => {
  const modalRoot = document.getElementById('modal-root')
  const node = React.useRef<Element | null>(null)

  const handleClick = e => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    onClose()
  }

  return isShowing && modalRoot
    ? ReactDOM.createPortal(
        <>
          <Overlay onClick={handleClick}>
            <div ref={node}>{children}</div>
          </Overlay>
        </>,
        modalRoot
      )
    : null
}

export default Modal
