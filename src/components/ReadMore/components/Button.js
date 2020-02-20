import PropTypes from 'prop-types'
import * as React from 'react'
import styled from 'styled-components'
import BlankButton from '../../styled/BlankButton'
import Text from '../../Text'

const WrapperButton = styled(BlankButton)`
  display: inline;
`

const ReadMoreButton = ({ text, onClick }) => (
  <WrapperButton onClick={onClick}>
    <Text element="span" type="secondary" size="small">
      {text}
    </Text>
  </WrapperButton>
)

ReadMoreButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ReadMoreButton
