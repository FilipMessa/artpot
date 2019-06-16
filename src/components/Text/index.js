// @flow

import * as React from 'react'
import styled from 'styled-components'

import theme from '../../theme/index'

const getFontSizes = () => ({ size, theme }) => {
  return theme.typography.fontSizes[size]
}

const getColorByType = () => ({ type, theme }) => {
  return theme.typography.colors[type]
}

const getWeight = () => ({ theme, weight }) => {
  return theme.typography.weight[weight]
}

const getSpaceAfter = () => ({ theme, spaceAfter }) => {
  return spaceAfter ? theme.typography.spacings[spaceAfter] : 0
}

const getSpaceBefore = () => ({ theme, spaceBefore }) => {
  return spaceBefore ? theme.typography.spacings[spaceBefore] : 0
}

type Props = {|
  +element?: 'p' | 'span' | 'div',
  +children: React$Node,
  +size?: 'large' | 'normal' | 'small',
  +type?: 'primary' | 'secondary',
  +weight?: 'normal' | 'bold',
  +align?: 'left' | 'center' | 'right' | 'justify',
  +spaceAfter?: 'small' | 'medium' | 'large',
  +spaceBefore?: 'small' | 'medium' | 'large',
  +className?: string,
|}

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
}: Props) => {
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
