// TODO Icon color from theme

import React from 'react'
import styled from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'
import { resetButtonStyles } from '../../utils/commonStyles'

const OFFSET = 400
const ANIMATION_DURATION = 0.433

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${ANIMATION_DURATION}s ease-in-out;
`

const Button = styled.button`
  ${resetButtonStyles}
`
const ScrollTop = () => {
  const [isVisible, setVisibility] = React.useState(false)

  const handleScroll = () => {
    setVisibility(window.scrollY > OFFSET)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Wrapper isVisible={isVisible}>
      <Button onClick={scrollToTop} title="Scroll to top" type="button">
        <FaAngleUp size={32} color="grey" />
      </Button>
    </Wrapper>
  )
}
export default ScrollTop
