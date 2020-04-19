import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useFullScreen } from 'react-browser-hooks'
import { ModalContext } from './ModalContext'
import { KEY_CODES } from '../../consts'

const Overlay = styled.div`
  z-index: ${({ theme }) => theme.zIndex[3]};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;c/components/MarkdownRenderer/index.js
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.components.modal.overlayColor};

  > div:focus {
    outline: none;
  }
`

const Content = styled.div`
  &:hover {
    cursor: ${({ isFullscreen }) => (isFullscreen ? 'zoom-out' : 'zoom-in')};
  }
`

const Modal = ({ onClose, children }) => {
  const [isFullscreen, setScreenState] = React.useState(false)
  const modalRoot = document.getElementById('modal-root')

  const node = React.useRef(null)

  const {
    modalState,
    actions: { handleClose },
  } = React.useContext(ModalContext)

  const isOpen = modalState === 'isOpen'

  React.useEffect(() => {
    if (isOpen) {
      node && node.current.focus()
    }
  }, [isOpen])

  const { toggle: toggleFullscreen } = useFullScreen({
    element: node,
  })

  const handleCloseModal = () => {
    onClose && onClose()
    handleClose()
  }

  const handleToggleFullscreen = () => {
    setScreenState(!isFullscreen)
    toggleFullscreen()
  }

  const handleOverlayClick = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // handle click Inside
      handleToggleFullscreen()
    } else {
      // outside click
      handleCloseModal()
    }
  }

  const handleOnKeyDown = ({ keyCode }) => {
    switch (keyCode) {
      case KEY_CODES.ESC:
        return handleCloseModal()
      default:
        return null
    }
  }

  return modalRoot && isOpen
    ? ReactDOM.createPortal(
        <>
          <Overlay
            isOpen={isOpen}
            onClick={handleOverlayClick}
            onKeyDown={handleOnKeyDown}
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
              <Content isFullscreen={isFullscreen}>{children}</Content>
            </div>
          </Overlay>
        </>,
        modalRoot
      )
    : null
}

export default Modal
