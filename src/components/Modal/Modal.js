// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useFullScreen } from 'react-browser-hooks'
import { ModalContext } from './ModalContext'

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

   > div:focus{
    outline: none;}
}
`

type Props = {
  onClose?: () => void,
  children: React.Node,
}

const Modal = ({ onClose, children }: Props) => {
  const modalRoot = document.getElementById('modal-root')
  const node = React.useRef<Element | null>(null)
  const { toggle: toggleFullscreen } = useFullScreen({
    element: node,
  })

  const {
    state: modalState,
    actions: { handleClose },
  } = React.useContext(ModalContext)

  const handleCloseModal = () => {
    onClose && onClose()
    handleClose()
  }

  const handleClickOutside = e => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    handleCloseModal()
  }

  const onEscKeyDown = event => {
    if (event.keyCode === 27) {
      handleCloseModal()
    }
  }

  const isOpen = modalState === 'isOpen'

  React.useEffect(() => {
    if (isOpen) {
      node.current.focus()
    }
  }, [isOpen])

  return modalRoot && isOpen
    ? ReactDOM.createPortal(
        <>
          <Overlay
            isOpen={isOpen}
            onClick={handleClickOutside}
            onKeyDown={onEscKeyDown}
          >
            <div
              role="dialog"
              ref={node}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              tabIndex="-1"
            >
              <div>
                <button type="button" onClick={toggleFullscreen}>
                  fullscreen X
                </button>
                {children}
              </div>
            </div>
          </Overlay>
        </>,
        modalRoot
      )
    : null
}

export default Modal
