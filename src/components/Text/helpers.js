export const getFontSizes = () => ({ size, theme }) => {
  return theme.typography.fontSizes[size]
}

export const getColorByType = () => ({ type, theme }) => {
  return theme.typography.colors[type]
}

export const getWeight = () => ({ theme, weight }) => {
  return theme.typography.weight[weight]
}

export const getSpaceAfter = () => ({ theme, spaceAfter }) => {
  return spaceAfter ? theme.typography.spacings[spaceAfter] : 0
}

export const getSpaceBefore = () => ({ theme, spaceBefore }) => {
  return spaceBefore ? theme.typography.spacings[spaceBefore] : 0
}
