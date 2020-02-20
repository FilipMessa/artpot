// TODO PropTypes
/* eslint-disable react/prop-types */
import * as React from 'react'
import styled from 'styled-components'
import theme from '../../theme/index'
import { getColorByType, getFontSizes, getSpaceAfter, getSpaceBefore, getWeight } from './helpers'


const StyledText = styled(({ element: TextElement, children, className }) => {
  return <TextElement className={className}>{children}</TextElement>
})`
  color: ${getColorByType()};
  font-size: ${getFontSizes()};
  text-align: ${({ align }) => align};
  margin: 0;
  margin-bottom: ${getSpaceAfter()};
  margin-top: ${getSpaceBefore()};
  font-weight: ${getWeight()};
  line-height: 1rem;
`

StyledText.defaultProps = {
  theme,
}

const Text = ({
  children,
  element = 'p',
  size = 'normal',
  type = 'primary',
  weight = 'normal',
  align = 'left',
  spaceAfter,
  spaceBefore,
  className,
}) => {
  return (
    <StyledText
      className={className}
      element={element}
      size={size}
      spaceAfter={spaceAfter}
      spaceBefore={spaceBefore}
      type={type}
      weight={weight}
      align={align}
    >
      {children}
    </StyledText>
  )
}

export default Text
