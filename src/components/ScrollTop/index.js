// TODO Icon colors from theme

import * as React from 'react'
import styled from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'
import media from 'styled-media-query'
import { resetButtonStyles } from '../../utils/commonStyles'
import { useResponsive } from '../../utils'

const OFFSET = 400
const ANIMATION_DURATION = 0.433
const MOBILE_TIMEOUT = 900

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity ${ANIMATION_DURATION}s ease-in-out;

  ${media.lessThan('medium')`
    bottom: 20px;
    right: calc(50% - 25px);
    margin-left: 100px;
  `}
`

const Button = styled.button`
  ${resetButtonStyles}

  ${media.lessThan('medium')`
    background: rgba(255,255,255,0.75);
    box-shadow: 1px 1px 5px -1px rgba(0,0,0,0.3);
    border-radius: 50%;
    display:block;
    width:50px;
    height:50px;
  `}
`
const ScrollTop = () => {
  const [isVisible, setVisibility] = React.useState(false)
  const [animTimeout, setAnimTimeout] = React.useState(null)
  const { md } = useResponsive()

  const handleScroll = () => {
    setVisibility(window.scrollY > OFFSET)
    if (!md) {
      if (animTimeout) {
        clearTimeout(animTimeout)
        setAnimTimeout(null)
      }
      const newTimeout = setTimeout(() => {
        setVisibility(false)
      }, MOBILE_TIMEOUT)
      setAnimTimeout(newTimeout)
    }
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
      <Button
        disabled={!isVisible}
        onClick={scrollToTop}
        title="Scroll to top"
        type="button"
      >
        <FaAngleUp size={32} color="grey" />
      </Button>
    </Wrapper>
  )
}
export default ScrollTop
